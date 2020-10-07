const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5555;

// set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "hello, this is other stuff"

// set handlebar routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: otherstuff
    });
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server listening on ' + PORT));
