const express = require("express");
const ContactUsController = require("../controllers/ContactUs");

const router = express.Router();

router.route("/").get(ContactUsController.getContactForms);
router.post("/add", ContactUsController.createContactForms);
router.delete("/:id", ContactUsController.DeleteContactForms);

module.exports = router;