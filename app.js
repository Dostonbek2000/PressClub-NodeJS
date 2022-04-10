const express  = require("express");
const app = express();
const bodyParser = require('body-parser');

const PORT = 5000
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('Press Club Backend in NodeJs')
})

app.listen(PORT,()=>{
    console.log(`${PORT} is working ...`);
})