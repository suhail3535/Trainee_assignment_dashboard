const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        name: String,
        link: String,
        date: String,
        sname: String,
        github: String,
        description:String,

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
const projectSchema = mongoose.Schema(
    {
        name: String,
        link: String,
        tr: String,
        desc:String


    },
    {
        versionKey: false,
    }
);

const studentModel = mongoose.model("student", studentSchema);
const marksModel = mongoose.model("studentmarks", marksSchema);
const projectModel = mongoose.model("projects", projectSchema);

module.exports = {
    studentModel,
    marksModel,
    projectModel
};