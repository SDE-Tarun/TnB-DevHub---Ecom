const express = require('express')
const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send("This is the homepage route 101")
})

app.listen(port, ()=>{
    console.log(`The server is up at \n http://localhost:${port}`)
})