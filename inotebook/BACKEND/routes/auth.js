const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


//create user using : POST "api/auth/". DOes not req. authetiction
router.post('/', [
    body('name').isLength({ min: 3 }),
    body('email',"enter a valid email").isEmail(),
    body('password').isLength({ min: 5 })
],(req, res) => {

const errors=validationResult(req)
    if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}

User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json(user))
  .catch(err=>console.log(err) )


// console.log(req.body);
// const user = User(req.body)
// user.save()
// res.send(req.body);

})


module.exports = router