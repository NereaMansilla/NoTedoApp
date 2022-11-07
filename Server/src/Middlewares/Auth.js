import  Jwt from "jsonwebtoken" 
import * as dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

export default function Auth (req,res, next){
     const token = req.headers.authorization.split(" ")[1] //here i have to catch the token sending from the front
    

    if(!token){
        res.status(401).json({msg: "access not authorizate"})
    }else{
        Jwt.verify(token, `${process.env.SECRET_AUTH}`, (err, decoded)=>{
            if(err){
                res.status(500).json({msg: "problem decoded token", err})
            }else{
                req.user = decoded.user
                next()
            }
        })
    

    }
   
  
  

}