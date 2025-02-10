
import Contact from "../models/Contact.js";


const createContact =  async(req, res) => {
    try {
        console.log(req.body);
        const { name, email, phone } = req.body;
        const contact = new Contact({ name, email, phone });
        await contact.save();
        res.status(201).json({message: "Contact added successfully", contact});
        
    } catch (error) {
        res.status(500).json({message: "Error adding contact", error});
    }
   
  
}

const getAllContacts =async(req, res) => {
    try {
        const contact = await Contact.find();      
        res.status(200).json({'message':'Contact fetched successfully', contact});
        
    } catch (error) {
        res.status(500).json({message: "Error fetching contact", error});
    }
   
  
}

const getContactById = async(req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);      
        res.status(200).json({'message':'Contact fetched successfully', contact});
        
    } catch (error) {
        res.status(500).json({message: "Error fetching contact", error});
    }
   
  
}

const deleteContact =  async(req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);      
        res.status(200).json({'message':'Contact deleted successfully', contact});
        
    } catch (error) {
        res.status(500).json({message: "Error deleting contact", error});
    }
   
  
}


const updateContact =   async(req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});      
        res.status(200).json({'message':'Contact updated successfully', contact});
        
    } catch (error) {
        res.status(500).json({message: "Error updating contact", error});
    }
   
  
}

export {createContact,getContactById, getAllContacts, deleteContact, updateContact};