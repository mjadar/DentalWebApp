const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }
}, {
    timestamps: true,
});

mongoose.set('useFindAndModify', false);

//compile schema into model
const Appointment = mongoose.model('Appointment', appointSchema);

module.exports = Appointment;