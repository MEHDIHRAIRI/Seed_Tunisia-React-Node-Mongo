const mongoose = require("mongoose");
const ContactUsSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  subject: { type: String },
  message: { type: String },
});
const ContactUs = mongoose.model("ContactUs", ContactUsSchema);
module.exports = ContactUs;