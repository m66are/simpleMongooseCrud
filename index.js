import express from 'express'
import 'dotenv/config' 
import mongoose from 'mongoose';
import articleRouter from './Routes/ArticlesRoute';
import bodyParser from 'body-parser';
import cors from "cors"

// ENV VARIABLES

const mongoUrl = 'mongodb+srv://m66are:284651@cluster0.thtb7.mongodb.net/Magazine?retryWrites=true&w=majority'
const PORT = process.env.PORT ?? 8080;
//


const app = express();
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cors());
app.use('/articles', articleRouter);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('DATABASE CONNECTED ✅')
    app.listen(PORT, (req,res) => {
        console.log('SERVER RUNING ON ' + PORT);
    })
});