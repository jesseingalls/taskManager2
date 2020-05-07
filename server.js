const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');



const app = express();

app.use(session({
    secret: 'secret sauce',
    resave: false,
    saveUninitialized: true,
}));

app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);



app.use(express.static(__dirname + '/public/dist/public'));

app.get('*', function(req, res) {
    res.sendfile('./public/dist/public/index.html');
  })


app.listen(3000, console.log('on 3000'));

