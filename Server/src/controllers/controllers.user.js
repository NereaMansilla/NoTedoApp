import { User } from "../models/User.js"
import { Project } from '../models/Project.js'
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'
import cors from 'cors'
dotenv.config({ path: '../.env' })


//ENTER


export async function singIn(req, res) {
    
    try {
        const { email, password } = req.body
        console.log(email,password)

        const user = await User.findOne({
            where: {
                email
            }

        })
      
        if (user === null) res.json({ msg: "there is no user with this data", authorized:false})


        else {
            if (bcrypt.compareSync(password, user.password)) {
             
                const token = Jwt.sign({ user: user }, `${process.env.SECRET_AUTH}`, {
                    expiresIn: `${process.env.EXPIRES}`

                })

                res.json({
                    user:user,
                    token: token,
                    authorized:true,
                })

            }
            else {
                
                res.json({
                    msg: "password or user invalid",
                    authorized:false
                })

            }
        }
       

    }



    catch (error) {
        res.status(500).send({ message: error.message })
    }

}

//REGISTER
export async function singUp(req, res, next) {
    try {

        
        const password = bcrypt.hashSync(req.body.password, parseInt(process.env.ROUND))
        const { name, email } = req.body
        const userExist= await User.findOne({
            where:{
                email
            }
        })

        if(userExist) res.json({msg: 'this email alredy exist', authorized:false, alredyExist:true})

        else{

            const user = await User.create({
                name,
                email,
                password
            })
    
    
    
            const token = Jwt.sign({ user: user }, `${process.env.SECRET_AUTH}`, {
                expiresIn: `${process.env.EXPIRES}`
    
            })
            console.log('token', token)
            next()
            console.log(user)
            res.json({
                user: user,
                token: token,
                authorized: true
            })
        }


    } catch (error) {
        res.send({ message: error.message, authorized:false})
    }
}





export async function deleteUser(req, res) {
    const { email } = req.body
     User.destroy({
        where: {
            email
        },
        include: Project
    })
    res.send('deleted')
}