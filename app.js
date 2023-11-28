const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const jobRouter = require("./routes/jobRouter");
const errorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRouter");
const authController = require("./controllers/authController");

// public
const { dirname } = require("path");
const { fileURLToPath } = require("url");
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//required for ES6 environment
// const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/jobs", authController.protect, jobRouter);
app.use("/api/v1/users", userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use(errorHandler);

module.exports = app;
