import mongoose from "mongoose"

mongoose.connect("mongodb+srv://ApiRest:<password>@cluster0.pqxexpg.mongodb.net/");

let db = mongoose.connection;

export default db;