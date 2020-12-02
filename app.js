const express = require('express');

const { userRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

// eslint-disable-next-line no-mixed-operators
app.listen(5000, (err) => err && console.log(err) || console.log('Listen 5000 ...'));
