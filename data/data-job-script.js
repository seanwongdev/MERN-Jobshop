const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Job = require("../models/jobModel");

dotenv.config({ path: "../config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  await mongoose.connect(DB);

  console.log("DB connection successful");
}

const jobs = JSON.parse(fs.readFileSync(`${__dirname}/jobs.json`, "utf-8"));

const importData = async () => {
  try {
    await Job.create(jobs);
    console.log("data successfully loaded");
    process.exit();
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.disconnect();
  }
};

const deleteData = async () => {
  try {
    await Job.deleteMany();
    console.log("data successfully deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.disconnect();
  }
};

if (process.argv[2] === "--import") {
  importData();
}
if (process.argv[2] === "--delete") {
  deleteData();
}
