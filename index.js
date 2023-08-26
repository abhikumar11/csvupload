const  express = require('express');
const app = express();
const port=3000;
const {db}=require('./config/mongoose');
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});