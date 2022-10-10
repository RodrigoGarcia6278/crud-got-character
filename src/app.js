const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.DB_HOST || 'localhost');
app.set('user', process.env.DB_USER || 'root');
app.set('password', process.env.DB_PASSWORD || 'spyXfam_11');
app.set('portdb', process.env.DB_PORT || 3306);
app.set('database', process.env.DB_NAME || 'crudgot');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: app.get('host'),
    user: app.get('user'),
    password: app.get('password'),
    port: app.get('portdb'),
    database: app.get('database')
}, 'single'));
app.use(express.urlencoded({extended: false}));

app.use('/', customerRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
