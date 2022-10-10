const fs = require("fs");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  // host: "localhost",
  // port: 1025,
  // secure: false,
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'quan.ln@zinza.com.vn',
    pass: 'kdudoxlrcmtkiocl'
  }
});


const html = fs.readFileSync('./index_web.html')

var message = {
    from: "quan.ln@zinza.com.vn",
    to: "hieu.lv@zinza.com.vn",
    subject: "Message title",
    html: html,
  };
  

transporter.sendMail(message, (err, info) => {
  console.log({ err, info });
});
