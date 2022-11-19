const express = require("express");
const app = express();
const  Pizza  = require('./modeles/pizzaModel');
const db = require("./db")
app.use(express.json());
const pizzasRoute = require('./routes/pizzasRoute');


app.use('/api/pizzas',pizzasRoute)
app.get("/",(req,res)=>{
    res.send("server working " +port);
});
app.get("/getapplizzas",(req, res)=>{
    Pizza.find({},(error, docs)=>{
        if (error){
            console.log(error)
        }else
        {
            res.send(docs)
        }
    })
})
const port = process.env.PORT ||5000;

app.listen(port,()=>'server running on port ');