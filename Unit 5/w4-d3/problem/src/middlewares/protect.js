const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) return reject(err)
            if (user) return resolve(user)
        });
    });
}

const protect = async function (req, res, next) {
    // we need to ensure that the token is sent in the request headers

    const bearerToken = req.headers?.authorization;

    //if token not send then send 400 status

    //else check the token to be a bearer token // beare ${token}

    if (!bearerToken || bearerToken.startsWith("Bearer "))
        return res.status(400)
            .send({ status: "failed", message: "Something went wrong please try again" })

    // if not send error with 400

    const token = bearerToken.split(" ")[1];

    let user;
    try {
        user = await verifyToken(token)


    }
    catch (err) {
        return res.status(400)
            .send({ status: "failed", message: "something went wrong please try again" })
    }

    req.user = user;
    next();
}

module.exports = protect