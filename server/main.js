import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import bodyParser from 'body-parser';
import Pin from '../build/gmapsModel.js';//call mongoose Model
import path from 'path';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import http from 'http';

app.set("port", 7777);

// Mongoose connecting
const db = mongoose.connection;
mongoose.Promise = global.Promise; // It prevent error message (mongoose.Promise = global.Promise;.....) in server console
db.on('err', console.error);
db.once('open', ()=>{
	console.log("Connected to mongoDB server@!");
});
mongoose.connect('mongodb://localhost/localDB');

//server 에 정적파일 띄우기
app.use(express.static(__dirname + './../client/public')); 


// Server-side routing

app.use('/', routes)

const server = app.listen(app.get("port"), () => {  
  console.log("Express listening on port", app.get("port"));
});

