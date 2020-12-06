const { userServices } = require('../../serrvice');

module.exports = async (req, res, next) => {
    try {
        const users = await userServices.getUsers();

        if (!users.length) {
            throw new Error('Users exist');
        }
        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
};
