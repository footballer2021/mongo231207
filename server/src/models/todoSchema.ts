import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id:String,
    content:String,
    editing:Boolean
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;