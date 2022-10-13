const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = "harryistechm"

//create user using : POST "api/auth/createuser". DOes not req. authetiction  =====> aa path THUNDERCLOENT am apisu 
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email', "enter a valid email").isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    //if htere are error,return bad request and the errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }



    try {
        //chcec h whther the user with this email exist already 
        let user = await User.findOne({ email: req.body.email })
        console.log(user)
        if (user) {
            return res.status(400).json({ error: "sorry a user with this email alredy exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)
        //create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user: {
                id: user.id

            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        console.log(jwtdata);


        // .then(user => res.json(user))
        // .catch(err => console.log(err))
        // res.json({error:'plese enter a unique value for email'})

        // console.log(req.body);
        // const user = User(req.body)
        // user.save()
        // res.send(req.body);


        // res.json({"done":"ok"})         ///====threrclint ma aa sucess has tpo dekhse
        res.json(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some Error occured")
    }

})

//authenticate a user uding : post"/api/auth/login"
router.post('/login', [
    body('email', "enter a valid email").isEmail(),
    body('password', "password can not be empty").exists(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'please try to login with correct credendtial' })

        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
            return req.status(400).json({
                error: "please try to login with correct credential"
            })

        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.send({ authtoken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server Error occured")
    }


})
module.exports = router