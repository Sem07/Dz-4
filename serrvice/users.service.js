const base = require('../Base/users');

module.exports = {
    getUserByEmail: (email) => {
        base.find((user) => user.email.toLowerCase() === email.toLowerCase());
    },

    getUsers: () => base,
    createdUser: (user) => {
        base.push(user);
    },

    deletedUser: (email) => {
        const userIndex = base.findIndex((user) => user.email.toLowerCase() === email.toLowerCase());

        base.splice(userIndex, 1);
    },
    lengthUsersArr: () => {
        if (base.length < 1) {
            return true;
        }
    }
};
