const express = require('express');
let Appointment = require('../models/appointment.model');
const router = express.Router();

router.get('/find', (req, res) => {
    Appointment.find()
        .then(data => {
            console.log('le reeees : ' + data)
            res.json(data);
        })
        .catch(err => res.status(404).json('Error:' + err))
});

router.post('/submit', (req, res) => {
    var { fname, lname, email, phone, date, time } = req.body;
    date = Date.parse(date);
    const newAppoint = new Appointment({ fname, lname, email, phone, date, time });
    newAppoint.save()
        .then(() => console.log('appoint added successfully!!'))
        .catch(err => console.log(err));
    res.redirect('/');
});

module.exports = router;