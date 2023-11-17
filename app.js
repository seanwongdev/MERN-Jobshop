const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const jobRouter = require('./routes/jobRouter');
const errorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRouter');
const authController = require('./controllers/authController')

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cookieParser());
app.use(express.json());

app.use('/api/v1/jobs', authController.protect, jobRouter);
app.use('/api/v1/users', userRouter);

app.use(errorHandler);

module.exports = app;
