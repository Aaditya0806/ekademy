import express from "express";
import cors from 'cors';
import {join} from 'path'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();



app.get('/', (req,res) => {
    console.log(__dirname)
    // res.send("hello there")
    res.sendFile(join(__dirname,"./index.html"));
  });
app.get('/courses/pyBToA/', (req,res) => {
    console.log(__dirname)
    // res.send("hello there")
    res.sendFile(join(__dirname,"./courses/"));
  });


app.listen('3000',(req,res)=>{
    console.log('server runiing localhosot:3000')
})
console.log(__dirname)