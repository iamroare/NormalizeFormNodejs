import nodemailer from "nodemailer";
import env from "../env.js";
import Mailgen from "mailgen";

// send mail from testing account
export const signup = async (req,res)=>{

    // this gonna make a nw user for uss\

    // let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        //   user: testAccount.user, // generated ethereal user
        //   pass: testAccount.pass, // generated ethereal password

        // FROM ENV
        user: env.DUMMY_EMAIL,
        pass: env.DUMMY_PASSWORD
        },
      });


      let message= {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world? this is me @iamROARe i.e. Rahul Prajapati", // plain text body
        html: "<b>Hello world? this is me @iamROARe i.e. Rahul Prajapati</b>", // html body
      }

      transporter.sendMail(message).then((info)=>{
        return res.status(201).json({message: "you will recieve a message soon", info: info.messageId, preview: nodemailer.getTestMessageUrl(info)});
      }).catch(error=>{
        return res.status(500).json({error});
      })


    // res.status(201).json("singup sucksexfully");
}


// send mail from real gmail account
export const login = (req, res)=>{



    // userEmail will be createed at the time of request , here it will be passed as key value pair

    const {userEmail} = req.body;
    let config={
        service: "gmail", 
        auth:{
            user:env.EMAIL,
            pass: env.PASSWORD
        }
    }


    let transporter = nodemailer.createTransport(config);  

    let MailGenerator = new Mailgen({
        theme: "default",
        product:{
                name: "Mailgen",
                link: "https://mailgen.js"
        }
    })

    let response = {
        body: {
            name: "falana sharma",
            intro : "Your bill was arrived mf",
            table:{
                data:[
                    {
                        item: "Nodemailer stack book",
                        description: "rahul's application",
                        price: "dedhso rupiya"
                    },
                    {
                        item: "hibanawab ki book",
                        description: "giana's application",
                        price: "tennso  rupiya"
                    }
                ]
            },
            outro: "looking forward to overcome my UNEMPLOMENT",
        }
    }
    

    let mail = MailGenerator.generate(response);


    let message= {
        from: env.EMAIL,
        to: userEmail,
        subject: "about login information",
        html :mail,
    }

    transporter.sendMail(message).then(()=>{
        return res.status(201).json({
            message: " you will receive an email"
        })
    }).catch(err =>{
        return res.status(500).json({err});
    })
    


    // res.status(201).json("logged in sucksexfullly");
}