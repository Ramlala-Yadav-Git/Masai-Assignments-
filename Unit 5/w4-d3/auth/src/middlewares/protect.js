const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) return reject(err);
			if (user) return resolve(user);
		});
	});
};

const protect = async function (req, res, next) {
	// we need to ensure that the token is sent in the request headeres
	const bearerToken = req.headers?.authorization;
	// if token not send then send 400 status

	// else check the token to be a bearer token // bearer ${token}
	if (!bearerToken || bearerToken.startsWith("Bearer "))
		return res
			.status(400)
			.send({ status: "failed", message: "something went wrong with bearer" });
	// if not send 400 error
	const token = bearerToken.split(" ")[1];

	let user;
	// else we will add the user to the req
	try {
		user = await verifyToken(token);
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "something went wrong" });
	}
	// then we will add the user to the req
	req.user = user;
	// then we will do next()
	next();
};
module.exports = protect;
