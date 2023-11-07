const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('../models/userModel')

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

const dbConnect = async () => {
  await mongoose.connect(DB);
  console.log('DB connect successfully')
};

dbConnect().catch((err) => console.log(err));

const deleteData = async () => {
  await User.deleteMany();
  console.log('deleted data successfully')
};

if (process.argv[2] === '--delete') {
  deleteData();
};
