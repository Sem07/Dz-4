const { Router } = require('express');

const { usersControllers } = require('../controllers');
const { usersMiddlewares } = require('../middlewares');

const userRouter = Router();

userRouter.post('/', usersMiddlewares.checkUserValid, usersMiddlewares.checkIsUserCreated, usersControllers.createUser);

userRouter.get('/', usersMiddlewares.checkUsers, usersControllers.getAllUsers);

userRouter.get('/:email', usersControllers.getOneUsers);

userRouter.delete('/:email', usersControllers.deleteUser);

module.exports = userRouter;
