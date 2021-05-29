const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;
app.use(expressLayouts);

//parse form data
app.use(express.urlencoded({ extended: false }))


//register view engine
app.set('view engine', 'ejs');

//include assets folder
app.use(express.static('./views/public'));

//Database Settings 
const url = "mongodb://localhost:27017/DentalApp"
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
//first flag => mongodb nodejs driver rewrote the tool it uses to parse db connection string
const connection = mongoose.connection;
//once the connection is open do ...
connection.once('open', () => {
    console.log("MongoDb database connection established successfully");
})

//Routes
app.use('/', require('./Backend/routes/index'));
app.use('/users', require('./Backend/routes/users'));
app.use('/appointment', require('./Backend/routes/appointment'))


app.listen(PORT, console.log(`Server started on port ${PORT}`));