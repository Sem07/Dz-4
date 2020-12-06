const { Router } = require('express');

const { usersControllers } = require('../controllers');
const { usersMiddlewares } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', usersMiddlewares.checkUsers, usersControllers.getAllUsers);

userRouter.get('/:id', usersMiddlewares.checkId, usersControllers.getOneUsers);

userRouter.post('/', usersMiddlewares.checkUserValid, usersMiddlewares.checkIsUserCreated, usersControllers.createUser);

userRouter.put('/:id', usersMiddlewares.checkId, usersControllers.updateUser);

userRouter.delete('/:email', usersControllers.deleteUser);

module.exports = userRouter;
