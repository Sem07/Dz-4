const { userServices } = require('../../serrvice');

module.exports = (req, res, next) => {
    try {
        const usersLength = userServices.lengthUsersArr();

        if (usersLength) {
            throw new Error('Users exist');
        }
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};
