const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pdfSchema = new mongoose.Schema({

});

const Pdf = mongoose.model("Pdf", pdfSchema);

module.exports = Pdf;
