const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const flash = require('connect-flash');
const middleware = require('./config/middleware');
const expressLayouts = require('express-ejs-layouts');
const csv = require('csv-parser');
const db = require("./config/mongoose");
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(expressLayouts);
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('./assets'));    

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(session({
    secret: "e3eIJ!9Xt39W",
    resave: false,
    saveUninitialized: false
}));


app.use(flash());
app.use(middleware.setFlash);

app.use('/', require('./routes'));

app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
   console.log(`listening on ${port}`);

});