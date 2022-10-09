const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        a: "thssi",
        number: 87
    }
    res.json(obj)

})


module.exports = router