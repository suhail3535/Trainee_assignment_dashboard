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
        methods: ["POST", "GET"],
        credentials:true
    })
);
app.get("/", (req, res) => {
    res.status(200).send("Welcome To HomePage");
});
app.use("/student", studentDetails);
app.use(express.static(path.join(__dirname, 'public')));

// Handles any requests that don't match the ones above - fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
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
