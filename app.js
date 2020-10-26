const express = require('express');
const env = require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));
app.set('views','./views');
app.set('view engine','ejs');


app.get('',(req,res)=>{
    res.render('index',{values:["dsad","asd","asd"]});
})

app.listen(port,()=>{
    console.log('listening');
})
