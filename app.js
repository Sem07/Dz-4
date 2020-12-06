const express = require('express');

const { userRouter } = require('./routes');
const { sequelize } = require('./base');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

(async () => {
    await sequelize.sync({ alter: true });
    app.listen(port, (err) => err && console.log(err) || console.log(`Listen ${port} ...`));
})();
