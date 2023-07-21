


import  nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

export function createTransport (){
const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,

        auth: {
            user: `${process.env.MAIL_USER}`,
            pass: `${process.env.PASS_USER}`
        }
    });

    return transport
}

export async function sendMail(req, res) {
    const { email, name } = req.body
    const transporter = createTransport()
    const info = await transporter.sendMail({
        from: `somethingexample@gmail.com`,
        to: `${email}`,
        subject: `Welcome!`,
        html: `<h3>Hello ${name} and Welcome to NoteDo! We're so happy to have u here! <h3/>
        <img src="cid:NoteDo" />`,
         attachments: [
            {
                filename: 'NoteDo.png',
                path: './src/assets/NoteDo.png',
                cid:"NoteDo"

            }
        ] 



    })
    console.log(info.messageId)
}
   
 
export async function emailRecover (req,res){
    const {email} = req.body
    const link = "https://www.youtube.com/watch?v=uwMFPoWm0qk"
    const transporter = createTransport()

    const mail = await transporter.sendMail({
        from: "sometingexample@gmail.com",
        to: `${email}`,
        subject: "Recover password",
        html: `<h3>Hello! if you want to recover your password please go to this link <h3/> ${link}`
    })
}
      


    
