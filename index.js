
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

import routerAuth from './router.js'
const PORT = process.env.PORT || 5000;
const app = express();
import cors from 'cors';
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/auth", routerAuth);
mongoose.set('strictQuery', false);

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.sgdiscg.mongodb.net/?retryWrites=true&w=majority';

const start = async () => {
    try{
        await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(PORT, () =>  console.log(`Server started on port ${PORT}`))
    }catch(e){
        console.log(e);
    }
}
start()
