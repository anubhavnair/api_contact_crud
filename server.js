import express from "express";
import { config } from "dotenv";
import  connectDb  from "./services/connectDb.js";
import  ContactRouter  from "./routes/contactRoutes.js";
import path from "path";
import bodyParser from "body-parser";
config({ path: ".env" });
import cors from "cors";
const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET","POST","PUT","PATCH","DELETE"]
}));
connectDb();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Contact Routes
app.use("/api/contacts",ContactRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
