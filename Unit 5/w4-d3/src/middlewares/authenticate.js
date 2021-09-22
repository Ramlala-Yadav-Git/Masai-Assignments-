const { verify } = require("jsonwebtoken");

const authenticate = function (req, res, next) {
    // we need to ensure that token in the requesst headres
    bearerToken = req?.headers?.authorization;


    // if toke not sent then send 400 error



    //else check the toke to be a bearer toke // bearer ${token}

    if (!bearerToken || !bearerToken.startsWith('Bearer')) return res.status(400).send({ status: "failed" })

    //if not then send 400 erroe


    // else we will verify that the token using jwt is valid and send


    //if not then send 400 erroe 


    // else we will add the user to the req
    const token = bearerToken.split(" ")[1]

    try {

        const user = await verifyToken(token)
    }
    catch (err) {
        return res.status(400).send({ status: "failed", meassge: "please send the bearer token" })
    }


    // theb we will do next()

    next()
}


module.exports = authenticate