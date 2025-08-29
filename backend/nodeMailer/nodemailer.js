// const nodemailer = require("nodemailer");
// require("dotenv").config({ path: "./resources/.env.local" });

// const transporter = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   auth: {
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//   },

//   tls: {
//     rejectUnauthorized: false
//   }
// });

// const mailer = async (template) => {
//   try {
//     const info = await transporter.sendMail({
//       from: process.env.MAIL_FROM_ADDRESS,
//       to: template.to,
//       subject: template.subject,
//       html: template.html,
//     });
//     return info;
//   } catch (error) {
//     return error;
//   }
// };


// module.exports = { mailer };



const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tweb92476@gmail.com',
        pass: 'jntd ujjh jqmd qmdr'
    }
});

const mailer = async (template) => {
    try {
        const info = await transporter.sendMail({
            from: '"Dear Click" <tweb92476@gmail.com>',
            to: template.to,
            subject: template.subject,
            html: template.html,
        });
        return info;
    } catch (error) {
        return error;
    }
};


module.exports = { mailer };



