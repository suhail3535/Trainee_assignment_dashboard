const mongoose = require("mongoose");
// const connection = mongoose.connect("mongodb+srv://khansohail015:353035@cluster0.kael6kq.mongodb.net/fashionFrenzy?retryWrites=true&w=majority")
const connection = mongoose.connect("mongodb+srv://khansohail015:suhailkhan9598@cluster0.ktryazg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
module.exports = {
    connection
}