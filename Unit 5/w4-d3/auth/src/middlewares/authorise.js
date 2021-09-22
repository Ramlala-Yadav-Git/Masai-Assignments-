const authorise = (permittedRoles) =>
	function (req, res, next) {
		const { user } = req.user;

		const roles = user.roles;
		const permitted = roles.filter((role) => permittedRoles.includes(role));
		console.log(permittedRoles);
		console.log(roles);
		if (permitted.length) {
			console.log("permitted");
			next();
		} else {
			return res
				.status(403)
				.send({ status: "failed", message: "Forbidden accesss" });
		}
	};
module.exports = authorise;
