const express = require('express');
const session = require('express-session');
//const hbs = require('express-handlebars');
let User = require('../models/user.model');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const app = express();

//app.engine('hbs',hbs({extname: '.hbs'}));
//app.set('view engine', 'hbs');


const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());
router.use(session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true
}));
router.use(express.urlencoded({extended: false}));
router.use(express.json());

passport.serializeUser(function(user, done){
    console.log('here1');
    console.log(user.id);
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    console.log('here2');
    User.findById(id, function(err,user){
        done(err, user);
    });
});


passport.use(new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(email,password, done){
        console.log('there i am');
        const user = new User({
            email: req.body.email, 
            password: req.body.password
            });
       
        console.log(user);
        console.log(user.email);
        console.log(user.password);
    User.findOne({email: req.body.email}, function(err, user){
        if(err) { console.log("erreeeeeeeeeeeeeeeeeeeur")};
        if(!user) {console.log("Incorrect email!");}// return done(null, false, {message: 'Incorrect email!'});}
        if(user) console.log("yeeeeeesss");
        bcrypt.compare(password, user.password, function(err,res){
            if(err)  { console.log("erreeeeeeeeeeeeeeeeeeeur"); return done(err)};
            if(res === false) {console.log("Incorrect password!")}; //return done(null, false, {message: 'Incorrect password!'});}
            return done(null, user);
        })
    })
}));

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/users/login');
}

function isLoggedOut(req,res,next){
    if(!req.isAuthenticated()) return next();
    res.redirect('/');
}

router.get('/setup', async (req,res) => {
    try{
        const exists = await User.exists({email: "ensadentalapp.sec@gmail.com"});

        if(exists) {
            console.log("exists");
            res.redirect('/users/login');
            return;
        };
    
        console.log("not exists");
        bcrypt.genSalt(10, function(err, salt){
            if(err) return next(err);
            bcrypt.hash("pass", salt, function(err, hash){
                if(err) return next(err);

                const newAdmin = new User({
                    email: "ensadentalapp.sec@gmail.com",
                    password: hash
                });

                newAdmin.save();
                res.redirect('/');
            });
        });
    
    } catch(e) {
        console.log('Error happend while connecting to the DB: ', e.message)
       }
});

/* router.get('/', isLoggedIn ,(req,res)=>res.render('welcome'));
*/

//login page
router.get('/login', isLoggedOut,(req,res)=>{
    const response = {
        title: "login",
        error: req.query.error
    }
    res.render('login', response);
});
/*

router.post('/login', (req,res,next)=>{
    passport.authenticate('local', function(err,user,info){
        if(err){
            console.log('ereuuur');
            return res.status(401).json(err);
            
        }
        if (user) {
            console.log('working');
            const token = user.generateJwt();
            return res.status(200).json({
                "token": token
            });
        } else {
            console.log('eeeeelse');
            res.status(401).json(info);
        }
    })(req, res, next)
});
*/


/*router.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/users/login?error=true'
}));*/
/*
router.post('/login',function(req,res,next){
    passport.authenticate('local')(req, res, function () {
        req.session.save(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    });
} );

*/
/*
router.post('/login', (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.redirect('/users/login?info=' + info);
      }
  
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
  
        return res.redirect('/');
      });
  
    })(req, res, next);
  });

*/
router.post("/login", function(req, res) {



    const user = new User({
    email: req.body.email, 
    password: req.body.password
    });
    
    
    console.log(user);
    
    req.logIn(user, function(err) {

        console.log(user);
    
    if (err) {
    
    console.log(err);
    
    } else {
    
    passport.authenticate("local")(req, res, function() {
    
    
    
    res.redirect("/");
    
    });
    
    }
    
    });
    
    
    
    });
    
    

router.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
})
//registrer page
router.get('/register',(req,res)=>res.render('register'));
module.exports = router;

