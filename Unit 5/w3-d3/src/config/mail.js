const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "b07db7454f6a78", // generated ethereal user
        pass: "b4ca3f7f2295b5", // generated ethereal password
    },
});

module.exports = transporter;