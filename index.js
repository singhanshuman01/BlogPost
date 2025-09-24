import bodyParser from 'body-parser';
import express from 'express';
import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {render} from 'ejs';
import morgan from 'morgan';

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public/styles"));

let details = []
fs.readFile("details.json", "utf-8", (err, data)=>{
    if(err){
        console.error(err);
        return "";
    }
    else{
        details = JSON.parse(data);
    }
});

app.get("/",(req,res)=>{
    // const data = JSON.parse(details);
    const msg = req.query.success ? "POSTED SUCCESSFULLY": null;
    
    res.render("index.ejs", {s: details, m: msg});
});

app.get("/post-blog",(req,res)=>{
    res.render("createBlog.ejs");
});

app.post("/post-blog",(req, res)=>{
    const id = req.body.id;
    const tit = req.body.title;
    const writer = req.body.writer;
    const detail = {"id": id,
        "title": tit,
        "writer": writer,
        "timestamp": Date()
    }
    try {
        details.push(detail);
        fs.writeFile("details.json", JSON.stringify(details),(err)=>{console.error(err)});
        fs.writeFile(__dirname+`/blogs/Blog${id}.txt`, req.body.blog,"utf-8",err=>console.error(err));
    } catch (error) {
        console.error(error);
    }
    res.redirect("/?success=true");
});

app.listen(PORT, ()=>{
    console.log(`Server started, PORT:${PORT}`);
})