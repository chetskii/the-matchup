const
    jwt = require('jsonwebtoken'),
    User = require('./models/User.js'),
    { JWT_SECRET } = process.env

// CREATES TOKENS
function signToken(user) {
    const userData = user.toObject()
    delete userData.password
    return jwt.sign(userData, JWT_SECRET)
}

function verifyToken(req, res, next) {
    console.log("verifying token?")
    // Get token from the headers of the incoming request:
    const token = req.get('token')
    // If no token is provided, deny access:
    if(!token) return res.json({ message: "ERROR", error: "No token provided." })
    // Otherwise, try to verify token:
    jwt.verify(token, JWT_SECRET, (err, decodedData) => {
        // If there's a problem w/ verification, deny access:
        if(err) return res.json({ message: "ERROR", error: "Invalid Token." })
        // Otherwise, search for user by the ID that was embedded in the token:
        User.findById(decodedData._id, (err, user) => {
            // If no user, deny access:
            if(!user) return res.json({ message: "ERROR", error: "Invalid Token." })
            // Add the user to the request object (The current user):
            req.user = user
            // Go on to process the route
            next()
        })
    })
}

module.exports = {
    signToken,
    verifyToken
}