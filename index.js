const express = require('express');
const path = require('path');
const users = require('./Users');
const logger = require('./Logger');
const exhdb = require('express-handlebars');
var exphbs  = require('express-handlebars');

const app = express();

// Init Middleware
// app.use(logger);

// Handles Middleware

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Homepage Route

app.get('/' , (req,res) => {
    res.render('index' , {
        title:'User App',
        users
    });
})

// Body Parser Middleware

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Get All Users

app.use('/api/users' , require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

// Set Static Folder

app.use(express.static(path.join(__dirname , 'public')))


// Send File index.html

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname , 'public' , 'index.html'));
})

app.listen(PORT , () => {
    console.log(`Server is Running on ${PORT}`);
})