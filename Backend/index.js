const express = require('express');
const bodyParser = require('body-parser');
const { studentDetails } = require('./Route');
const { connection } = require("./db");
const cors = require('cors')
const app = express();
const port =8080;

app.use(bodyParser.json());

app.use(cors());
app.use(
    cors({
        origin: "https://trainee-assignment-dashboard-frontend.vercel.app",
        methods: ["POST","GET"],
        credentials:true
    })
);
app.get("/", (req, res) => {
    res.status(200).send("Welcome To HomePage");
});
app.use("/student", studentDetails);

app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected to DataBase");
    } catch (error) {
        console.log(error)
        console.log("Couldn't connect to DataBase");
    }
    console.log(`Server running on port ${port}`);
});
