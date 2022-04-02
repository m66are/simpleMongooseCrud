import { Router } from "express";
import ArticleModel from "../models/ArticleModel";
import mongoose from 'mongoose'
let articleRouter = Router();





articleRouter.post('/add', (req, res) => {
    let newArticle = ArticleModel(req.body);
    try {
        newArticle.save();
        
        res.status(200).json(newArticle);
    } catch (error) {
        res.status(400).send(error);
        
    }
   

});






articleRouter.get('/', async (req,res)=>{
    try {
        let articles = await ArticleModel.find();
        res.status(200).json(articles);
    
        
    } catch (error) {
        res.status(404).json({message : error.message})
    }
})
export default articleRouter;