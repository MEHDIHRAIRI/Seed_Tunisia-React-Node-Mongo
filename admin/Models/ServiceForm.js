const mongoose = require("mongoose");
const ServiceFormSchema = mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Object: { type: String },
  Message: { type: String },
});
const ServiceForm = mongoose.model("ServiceForm", ServiceFormSchema);
module.exports = ServiceForm;