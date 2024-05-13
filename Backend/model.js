const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        name: String,
        link: String,
        date: String,
        sname: String,
        github: String

    },
    {
        versionKey: false,
    }
);
const marksSchema = mongoose.Schema(
    {
        name: String,
        link: String,


    },
    {
        versionKey: false,
    }
);

const studentModel = mongoose.model("student", studentSchema);
const marksModel = mongoose.model("studentmarks", marksSchema);

module.exports = {
    studentModel,
    marksModel
};