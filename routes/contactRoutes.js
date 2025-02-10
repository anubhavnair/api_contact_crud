import express from "express";
const ContactRouter = express.Router();
import { createContact, getContactById,getAllContacts, deleteContact, updateContact } from "../controllers/ContactController.js";

ContactRouter.post("/add",createContact);
ContactRouter.get("/",getAllContacts);
ContactRouter.get("/:id", getContactById);
ContactRouter.delete("/:id",deleteContact);
ContactRouter.put("/:id",updateContact);

export default ContactRouter;