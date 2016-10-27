import express from 'express';
import mongoose from 'mongoose';
import routes from './routes.js';
import path from 'path';
import bodyParser from 'body-parser';
import Pin from '../server/gmapsModel.js';//call mongoose Model
import http from 'http';

const app = express();

app.set("port", 7777);

// Mongoose connecting
mongoose.Promise = global.Promise;
const db = mongoose.connection;//Connect to mongoDB server
db.on('err', console.error);
db.once('open', ()=>{
	console.log("Connected to mongoDB server!");
});
mongoose.connect('mongodb://localhost/localDB');

app.use(express.static(__dirname + './../client/public'));  //server 에 정적파일 띄우기
app.get('/data', (req,res) => {	//mongoDB pin data 모두 보냄(array)/ok
	Pin.find((err,pins)=>{
		if(err){console.log('err')}
		res.jsonp(pins);
	});
});

// Server-side routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

const server = app.listen(app.get("port"), () => {  
  console.log("Express listening on port", app.get("port"));
});

