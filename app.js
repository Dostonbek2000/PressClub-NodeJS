const express  = require("express");
const app = express();
const bodyParser = require('body-parser');
const ConnectDB = require('./src/config/db')
const PORT = 5000
const NewsRouter = require('./src/NewsModel/newsrouter')
const cors = require('cors')


app.use(bodyParser.json())
app.use(cors())

ConnectDB()

app.get('/',(req,res)=>{
    res.send('Press Club Backend in NodeJs')
})

app.use('/api/news',NewsRouter)

app.listen(PORT,()=>{
    console.log(`${PORT} is working ...`);
})