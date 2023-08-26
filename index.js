const  express = require('express');
const app = express();
const port=3000;
const {db}=require('./config/mongoose');
const bodyparser = require('body-parser');
const path=require('path');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(require('./routes'));


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});