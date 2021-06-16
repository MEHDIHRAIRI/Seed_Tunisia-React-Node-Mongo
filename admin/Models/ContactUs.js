const mongoose = require("mongoose");
const ContactUsSchema = mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Subject: { type: String },
  Message: { type: String },
});
const ContactUs = mongoose.model("ContactUs", ContactUsSchema);
module.exports = ContactUs;