const nodemailer=require('nodemailer')

const mailhelper=async(options)=>{

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.EMAIL_PORT,
      
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      const message={
        from: 'd.7484959595@gmail.com', // sender address
        to: options.email, // list of receivers
        subject: options.subject, // Subject line
        text: options.message, // plain text body
        // html: "<b>Hello world?</b>", // html body
      }

    await transporter.sendMail(message);
    
}
module.exports=mailhelper
 