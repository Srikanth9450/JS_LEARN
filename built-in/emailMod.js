var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'srikanthh.gattu@gmail.com',
        pass: '123456789'
    }
});

var mailOptions = {
    from: 'c',
    to: 'srikanthh.gattu@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});