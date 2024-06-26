import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"
export const getPosts = async(req, res) => {
    try {
        const postMessage=await PostMessage.find();
        res.status(200).json(postMessage);
    } catch {
        res.status(404).json({message:error.message});
    }
}
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost=async(req,res)=>{
    const post =req.body;
    const newPost=new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost)
    }
    catch{
        res.status(409).json({message:error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, selectedFile} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, message,  selectedFile, _id: id };
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost=async(req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndDelete(id)
    res.json({message:'Post deleted Successfully'});
}
