const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')



const JWT_SECRET = "harryistechm"

//route-1
//create user using : POST "api/auth/createuser". DOes not req. authetiction  =====> aa path THUNDERCLOENT am apisu 
router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email', "enter a valid email").isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    let success=false;
    //if htere are error,return bad request and the errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }



    try {
        //chcec h whther the user with this email exist already 
        let user = await User.findOne({ email: req.body.email })
        console.log(user)
        if (user) {
            return res.status(400).json({ success ,error: "sorry a user with this email alredy exists" })
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


        // .then(user => res.json(user))
        // .catch(err => console.log(err))
        // res.json({error:'plese enter a unique value for email'})

        // console.log(req.body);
        // const user = User(req.body)
        // user.save()
        // res.send(req.body);


        // res.json({"done":"ok"})         ///====threrclint ma aa success has tpo dekhse
        success=true;
        res.json({success,authtoken})            //{}=>ma authtooken na khavarthi*********ther clent ma response ma akhu dekhay...
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some Error occured")
    }

})


//route-2
//authenticate a user uding : post"/api/auth/login"
router.post('/login', [
    body('email', "enter a valid email").isEmail(),
    body('password', "password can not be empty").exists(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body
    try {
        let user = await User.findOne({ email });
        if (!user) {
            const success = false
            return res.status(400).json({ success, error: 'please try to login with correct credendtial' })

        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
            const success = false
            return req.status(400).json({
                success, error: "please try to login with correct credential"
            })

        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        const success = true
        res.send({ success, authtoken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server Error occured")
    }


})

//route-3
//get loged in user detail using: POST "api/auth/getuser". login userired
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server Error occured")
    }
})

module.exports = router