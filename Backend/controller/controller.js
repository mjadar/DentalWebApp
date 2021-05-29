let Appointment = require('../models/appointment.model');

//get * appointments
exports.findall = (req, res) => {
    Appointment.find()
        .then(appoint => res.send(appoint))
        .catch(err => res.status(500).send({ message: 'Cannot get all appointment' }));
};

//get by id 
exports.findbyid = (req, res) => {
    Appointment.findById(req.params.id)
        .then(appoint => res.send(appoint))
        .catch(err => res.status(500).send({ message: 'Cannot get single appointment' }));
};

//delete by id 
exports.delete = (req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
        .then(appoint => res.send({ message: 'Appointment Deleted Successfully' }))
        .catch(err => res.status(500).send({ message: 'Couldn t delete appointment' }));
};

//update by id 
exports.update = (req, res) => {
    Appointment.findByIdAndUpdate(req.body.id_appoint, req.body)
        .then(appoint => {
            if (!appoint)
                res.status(404).send({ message: 'cannot update appontment maybe not found' })
            else
                res.redirect('/appointment/dashboard');
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update appointment information" })
        })
};

//add user 
exports.add = (req, res) => {
    var { fname, lname, email, phone, date, time } = req.body;
    date = Date.parse(date);
    const newAppoint = new Appointment({ fname, lname, email, phone, date, time });
    newAppoint.save()
        .then(() => res.redirect('/'))
        .catch(err => {
            res.status(500).send({ message: "Somme error occured while creating appointment" })
        });
};