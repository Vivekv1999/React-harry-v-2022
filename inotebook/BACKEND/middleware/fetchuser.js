const jwt = require('jsonwebtoken');
const JWT_SECRET = "harryistechm"


const fetchuser = (req, res, next) => {
    //get the user from the jwt token add id to req object
    const token = req.header('auth-token')
    if (!token) {
        res.send(401).send({ error: "please authenticate with valide token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        next()
    }
    catch {
        res.send(401).send({ error: "please authenticate with valide tokennnn" })
    }
}
module.exports = fetchuser