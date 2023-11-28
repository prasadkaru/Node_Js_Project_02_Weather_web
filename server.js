const express  = require('express');
const app = express();

app.get("/",(req, res)=>{
    res.send('hello from express');
});


app.get('/api',(req, res)=>{
    res.send('from API')
})
app.listen(3000,()=>{
    console.log("server open 3000")});

app.get('/help',(req, res)=>{
    res.send("from help")
})