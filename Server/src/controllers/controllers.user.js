import { User } from "../models/User.js"
import { Project } from '../models/Project.js'
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'
import cors from 'cors'
dotenv.config({ path: '../.env' })


//ENTER
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // for some legacy browsers
  }

export async function singIn(req, res) {

    try {
        const { email, password } = req.body
        const user = await User.findOne({
            where: {
                email
            }

        })
        console.log(user)
        if (user === null) throw new Error("Password or email incorrect") /* res.status(404).json({msg:"Password or email incorrect"})  */


        else {
            if (bcrypt.compareSync(password, user.password)) {
                console.log(req.headers)
                const token = Jwt.sign({ user: user }, `${process.env.SECRET_AUTH}`, {
                    expiresIn: `${process.env.EXPIRES}`

                })

                res.json({
                    user,
                    token: token
                })

            }
            else {
                console.log('headers', req.headers)
                res.status(500).json({
                    msg: "password or user invalid"
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
        const user = await User.create({
            name,
            email,
            password
        })



        const token = Jwt.sign({ user: user }, `${process.env.SECRET_AUTH}`, {
            expiresIn: `${process.env.EXPIRES}`

        })
        next()
        console.log(user)
        res.json({
            user: user,
            token: token
        })


    } catch (error) {
        res.send({ message: error.message })
    }
}





export async function deleteUser(req, res) {
    const { email } = req.body
    const user = User.destroy({
        where: {
            email
        },
        include: Project
    })
    res.send('deleted')
}