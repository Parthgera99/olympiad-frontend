const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./connectDB');


//middleware innitilization
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to database
connectDB();

const SECRET_API_PATH = process.env.SECRET_API_PATH;
const PORT = process.env.PORT || 5000;

app.get("/"+SECRET_API_PATH,(req,res) => {
  res.send("Hola you are on api home route")
})

// fetching the blueprint(s)
const loginSignup = require("./Routes/loginSignup");
app.use("/"+SECRET_API_PATH,loginSignup)


// route for 404 status code (the route that doesn't exists)
app.get('*', (req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`)
})