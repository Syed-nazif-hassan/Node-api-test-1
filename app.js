const express = require("express")
const expressValidator = require("express-validator")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
const postRoutes = require("./routes/post")
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected."))
mongoose.connection.on("error", err => console.log(`DB connection error: ${err.message}`));
app.use(bodyParser.json())
app.use(expressValidator())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))
app.use("/", postRoutes)
app.listen(port, () => console.log(`A Node JS API is listening on port: ${port}`))