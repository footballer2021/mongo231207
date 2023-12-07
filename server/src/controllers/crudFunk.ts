import mongoose from "mongoose";
import { RequestHandler } from "express";
import Todo from "../models/todoSchema";

mongoose.connect('mongodb://127.0.0.1:27017/todo_list20231207')
.then(() => console.log('DB接続に成功しました'))
.catch(err => console.log(err));

const getData: RequestHandler = async (req, res) => {
    const todos = await Todo.find({});
    console.log(todos)
    try{
        res.json(todos)
    } catch(err){
        res.status(500).send(err);
    }
};

export { getData };