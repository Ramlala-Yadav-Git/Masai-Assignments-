const authorise = (permittedRoles) => {

    return function (req, res, next) {
        const { user } = req.user;
        const roles = user.roles;
        const permitted = roles.filter((role) => {
            permittedRoles.includes(role)
        })

        if (permitted.length) {
            return next()
        }
        else {
            return res.status(403).send({ status: "failed", message: "Forbidden access" })
        }

    }
}

module.exports = authorise