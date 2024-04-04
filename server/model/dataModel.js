import mongoose from "mongoose";


const dataSchema = new mongoose.Schema({
    date:{
        type: String,
        required: true
    },
    testData:{
        type: String,
        required: true
    },
    product:{
        type: String,
        required: true
    },
    n:{
        type: String,
        required: true
    },
    feature:{
        type: String,
        required: true
    },
    sharedTo:{
        type: String,
        required: true
    },
    sharedBy:{
        type: String,
        required: true
    }


})


export default mongoose.model("Data", dataSchema);