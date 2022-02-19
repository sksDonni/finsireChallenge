import express from "express"
import logger from "morgan"
import mongoose from "mongoose"
import bodyparser from "body-parser"
import Router from "./routes/index.js"
import cors from "cors"
import config from './config.js'

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/', Router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
const CONNECTION_URL = config.MONGO_URL
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err.message));

app.listen(8000, () => {
    console.log("listening")
});
