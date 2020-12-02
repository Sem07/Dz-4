const { userServices } = require('../../serrvice');

module.exports = (req, res, next) => {
    try {
        const { email } = req.body;

        const user = userServices.getUserByEmail(email);

        if (user) {
            throw new Error('User exist');
        }
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};
