const express = require('express')
const router = express.Router();
const User = require('../models/User')


//create user using : POST "api/auth/". DOes not req. authetiction
router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body)
    user.save()
    res.send(req.body);

})


module.exports = router