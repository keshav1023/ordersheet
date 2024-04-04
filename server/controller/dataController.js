import Data from "../model/dataModel.js";

export const create = async(req, res)=>{
    try {

        const orderData = new Data(req.body);

        if(!orderData){
            return res.status(404).json({msg: "order data not found"});
        }

        await orderData.save();
        res.status(200).json({msg: "Order added successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getAll = async(req, res) =>{
    try {

        const orderData = await Data.find();
        if(!orderData){
            return res.status(404).json({msg:"Order data not found"});
        }
        res.status(200).json(orderData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getOne = async(req, res) =>{
    try {

        const id = req.params.id;
        const orderExist = await Data.findById(id);
        if(!orderExist){
            return res.status(404).json({msg: "Order not found"});
        }
        res.status(200).json(orderExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const update = async(req, res) =>{
    try {

        const id = req.params.id;
        const orderExist = await Data.findById(id);
        if(!orderExist){
            return res.status(401).json({msg:"Order not found"});
        }

        const updatedOrder = await Data.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updatedOrder);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deleteOrder = async(req, res) =>{
    try {

        const id = req.params.id;
        const orderExist = await Data.findById(id);
        if(!orderExist){
            return res.status(404).json({msg: "Order not exist"});
        }
        await Data.findByIdAndDelete(id);
        res.status(200).json({msg: "Order deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}