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

// fetching the blue print(s)
const indexRoute = require('./Routes/index')
app.use("/"+SECRET_API_PATH,indexRoute)

app.get('*', (req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`)
})