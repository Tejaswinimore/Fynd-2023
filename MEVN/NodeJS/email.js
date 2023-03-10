var nodemailer = require('nodemailer.js');
 
var transporter = nodemailer.create.Transport({
    service: "gmail",
    auth: {
        user: 'moretejaswini65@gmail.com',
        pass: 'Pass@123'
    }
});

var mailOptions = {
    from: 'moretejaswini65@gmail.com',
    to: '1903067@ritindia.edu',
    subject: 'submission',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    } else{
        console.log('Email sent: ' +info.response);
    }
});

