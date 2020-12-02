const { userServices } = require('../serrvice');

module.exports = {
    getAllUsers: (req, res) => {
        try {
            const users = userServices.getUsers();

            res.status(200).json(`Users found: ${users}`);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    createUser: (req, res) => {
        try {
            const user = req.body;

            userServices.createdUser(user);

            res.status(201).json('User created');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getOneUsers: (req, res) => {
        try {
            const { email } = req.params;

            if (email.length < 0) {
                throw new Error('User email must > 0');
            }
            const user = userServices.getUserByEmail(email);

            if (!user) {
                throw new Error('User not created');
            }
            res.status(200).json(`User found: ${user}`);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: (req, res) => {
        try {
            const { email } = req.params;

            if (email.length < 0) {
                throw new Error('User email must > 0');
            }
            const user = userServices.deletedUser();

            if (!user) {
                throw new Error('User not created');
            }
            res.json('User delete');
        } catch (e) {
            res.status(400).json(e.message);
        }

        res.json('user delete');
    }
};
