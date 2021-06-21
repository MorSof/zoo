const axios = require("axios");

async function isAuthenticatedMiddleware(req, res, next) {
    const accessToken = req.header('Access-Token');

    if(accessToken == null) {
        return res.status(401).json({ error: 'Invalid Token' });
    }

    const authentication = await axios('http://localhost:3005/users/verify-token', {
        headers: {
            "Access-Token": accessToken
        }
    })

    if (!authentication.data.isVerified) {
        return res.status(401).json({ error: 'User not authenticated' });
    }

    return next();
}

module.exports = isAuthenticatedMiddleware;