const express = require('express');
let Appointment = require('../models/appointment.model');
const controller = require('../controller/controller');
const router = express.Router();


router.get('/dashboard', (req, res) => {
    res.render('admin-dashboard', { users: "new data" })
});



//API 
router.get('/api/all', controller.findall);
router.route('/api/:id').get(controller.findbyid);
router.route('/api/:id').delete(controller.delete);
router.route('/api/update/:id').put(controller.update);
router.post('/api/submit', controller.add);

module.exports = router;