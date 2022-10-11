const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


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
        //create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

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


module.exports = router