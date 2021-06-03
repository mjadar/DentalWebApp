const express = require('express');
var fs = require('fs');

const nodemailer = require("nodemailer");


const router = express.Router();

router.use(express.json())

router.get('/', (req, res) => {
    res.render('contact')
});

router.post('/',(req,res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'database.project95@gmail.com',
            pass: 'database2021'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to:  'database.project95@gmail.com',
        subject: 'Message from ' + req.body.email + ': ' + req.body.subject,
        text: req.body.message
    }
        

        transporter.sendMail(mailOptions, (error,info) => {
            if(error){
                console.log(error);
                res.send('error');
            }
            else
            {
                console.log('Email sent: ' + info.response);
                res.send('success')
            }
        })
    })



module.exports = router;