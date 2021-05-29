const express = require('express');
let Appointment = require('../models/appointment.model');
const controller = require('../controller/controller');
const axios = require('axios');
const { response } = require('express');
const router = express.Router();


router.get('/dashboard', (req, res) => {
    //make a request to /appointment/dashboard/api/all
    axios.get('http://localhost:5000/appointment/api/all')
        .then(response => res.render('admin-dashboard', { appoints: response.data }))
        .catch(err => {
            res.send(err)
        })
});

//edit tmp


//API 
router.get('/api/all', controller.findall);
router.route('/api/:id').get(controller.findbyid);
router.route('/api/delete/:id').post(controller.delete);
router.route('/api/update/:id').post(controller.update);
router.post('/api/submit', controller.add);

module.exports = router;