const { userServices } = require('../serrvice');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userServices.getUsers();

            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const user = req.body;

            const newUser = await userServices.createUser(user);

            res.status(201).json(newUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getOneUsers: async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await userServices.getUserById(userId);

            if (!user) {
                throw new Error('User not created');
            }
            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { email } = req.params;

            if (email.length < 0) {
                throw new Error('User email must > 0');
            }
            const user = userServices.deletedUser();

            if (!user) {
                throw new Error('User not created');
            }
            res.status(205).json('User delete');
        } catch (e) {
            res.status(400).json(e.message);
        }

        res.json('user delete');
    },

    updateUser: async (req, res) => {
        try {
            const updateUser = req.body;
            const { id } = req.params;

            const db = await userServices.updateUser(id, updateUser);

            res.status(201).json(db);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
