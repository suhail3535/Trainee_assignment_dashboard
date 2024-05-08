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

const studentModel = mongoose.model("student", studentSchema);

module.exports = {
    studentModel,
};