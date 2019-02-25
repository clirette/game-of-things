const express = require('express');
const logger = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const mongojs = require('mongojs');
const db = mongojs('things', ['answers', 'players']);

const app = express();
app.use(express.urlencoded({extended: true}));

app.use(logger('dev'));

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


require('./routes')(app, db);

app.listen(8000, () => console.log('App started'));