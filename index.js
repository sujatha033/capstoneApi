import express from "express";
import ejs from "ejs";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get("/" , (req,res) => {
    res.render("index.ejs" , { content : " Joke is loading.... "});
});
app.get("/joke", async(req,res) => {
    try{
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any?format=txt");
    // console.log(result.data);
    res.render("index.ejs" , { content : JSON.stringify(result.data) });
    }catch(error){
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    };
});
app.listen(port , () => {
    console.log(`Server listening on port ${port}`);
});