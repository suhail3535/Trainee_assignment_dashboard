const express = require("express");
const app = express();

const { studentModel, projectModel } = require("./model.js");
const { marksModel } = require("./model.js");
// const { marksModel } = require("./model.js");
app.use(express.json());
const studentDetails = express.Router();
const studentmarks = express.Router();
const projectDetails = express.Router();


// <--------------------postrequest-------------------------->

studentDetails.post("/add", async (req, res) => {
    const data = req.body;
    try {
        const user = new studentModel(data);
        await user.save();
        res.status(200).send({ msg: "Data Submitted" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});
studentmarks.post("/addmarks", async (req, res) => {
    const data = req.body;
    try {
        const user = new marksModel(data);
        await user.save();
        res.status(200).send({ msg: "Project Link Added" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});
projectDetails.post("/addproject", async (req, res) => {
    const data = req.body;
    try {
        const user = new projectModel(data);
        await user.save();
        res.status(200).send({ msg: "Marks Link Added" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});

// <--------------------getrequest-------------------------->

studentmarks.get("/", async (req, res) => {
    try {
        const users = await marksModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ msg: "error.msg " });
    }
});
studentDetails.get("/", async (req, res) => {
    try {
        const users = await studentModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ msg: "error.msg " });
    }
});
projectDetails.get("/", async (req, res) => {
    try {
        const users = await projectModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({ msg: "error.msg " });
    }
});


// <--------------------updaterequest-------------------------->

studentDetails.patch("/update/:userID", async (req, res) => {
    const { userID } = req.params;
    const data = req.body;
    try {
        await studentModel.findByIdAndUpdate({ _id: userID }, data);
        res.status(200).send({ msg: "Details Updated" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});

// <--------------------deleterequest-------------------------->


studentDetails.delete("/delete/:userID", async (req, res) => {
    const { userID } = req.params;
    try {
        await studentModel.findByIdAndDelete({ _id: userID });
        res.status(200).send({ msg: " product details deleted" });
    } catch (error) {
        res.status(400).send({ msg: error.msg });
    }
});

// export userRouter
module.exports = {
    studentDetails,
    studentmarks,
    projectDetails
};