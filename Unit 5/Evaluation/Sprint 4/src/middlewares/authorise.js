const authorise = (permittedRoles) => {
    return function (req, next, res) {
        console.log(req.user)
        const user = req.user;

        const roles = user.roles;

        const permitted = roles.filter((role) => permittedRoles.includes(role));

        if (permitted.length) {
            next()
        }
        else {
            return res
                .status(403)
                .send({ status: "Failed", message: "Forbidden access" })
        }
    }
}
module.exports = authorise;