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
        

        const user = await User.findOne({
            where: {
                email
            }

        })
        console.log('user', user)
        if (user === null) res.json(false)


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
            /* else {
                
                res.json({
                    msg: "password or user invalid",
                    authorized:false
                })

            } */
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
           
            next()
            
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


export async function verifyUserExist (req,res,next) {
    const {email} = req.body
    const userVerify = await User.findOne({
        where:{
            email
        }

    })
 if(!userVerify) return res.send(false)
    if(userVerify) {
        res.json(userVerify)
        next()   
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


export async function updatePassword(req,res){
    const {email} = req.body
    const password = bcrypt.hashSync(req.body.password, parseInt(process.env.ROUND))
    
    const user = await User.findOne({
        where:{
            email
        }
    })
    console.log('password anterior', user.password)
   user.update({
    password
   })
    
    console.log('password nueva', password)
    }