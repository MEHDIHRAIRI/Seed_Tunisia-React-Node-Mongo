var ContactForm = require("../models/ContactUs");
const mongoose = require("mongoose");

const getContactForms = async (req, res) => {
  try {
    const allConactForms = await ContactForm.find();

    console.log(allConactForms);
    res.status(200).json(allConactForms);
  } catch (error) {
    res.status(404).json({ message: error.message() });
  }
};

const createContactForms = async (req, res) => {
  var newcontact = new ContactForm();
  newcontact.name = req.body.name;
  newcontact.email = req.body.email;
  newcontact.subject = req.body.subject;
  newcontact.message = req.body.message;
  console.log("contact Form: ", req.body);
  try {
    await newcontact.save();
    res.status(200).json(newcontact);
  } catch (err) {
    console.log(err);
  }
};


const DeleteContactForms = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Contact Form Found with id : ${id} ");

  await ContactForm.findByIdAndRemove(id);
  res.json({ message: "Contact deleted successfully." });
};

module.exports = { getContactForms, createContactForms, DeleteContactForms };