const express = require("express");
const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log(`backend is working at port ${port}`);
})