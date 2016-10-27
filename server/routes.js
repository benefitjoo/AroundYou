import bodyParser from 'body-parser';
import Pin from '../server/gmapsModel.js';//call mongoose Model
import express from 'express';
import fs from 'fs';
import path from 'path';
var multer  = require('multer')
var upload = multer({ dest: './uploads/' })

const router = express.Router();


router.get('/data', (req,res) => {	//data 요청시 mongoDB pin data 모두 보냄(array)
	Pin.find((err,pins)=>{
		if(err){console.log('err')}
		res.jsonp(pins);
	});
});


router.get('/upload', (req, res)=>{  
  Pin.find((err, pins)=>{
  	if(err) { console.log('image load err') }
  		// console.log(pins)
  	var pinImage = pins[0].data_uri.toString().replace(/^data:image\/jpeg;base64,/,"");

  	console.log('pinImage', typeof pinImage, pinImage)
  	var binaryData = new Buffer(pinImage, 'base64').toString('binary');
  	console.log(binaryData);
 //  	// var base64Image = new Buffer(pinImage, 'binary').toString('base64');
 //  	// var decodedImage = new Buffer(base64Image, 'base64').toString('binary');

 // //  	var converter = function(dataString) {
 // //  		var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
 // //    		response = {};
 // //    	if (matches.length !== 3) {
	// //   		return new Error('Invalid input string');
	// // 	}
	// // 	response.type = matches[1];
	// // 	response.data = new Buffer(matches[2], 'base64');

	// // 	return response;
	// // }

	// // var imageBuffer = converter(pinImage);

	fs.writeFile('image_decoded.jpg', binaryData, 'binary' ,function(err) { 
		if(err) console.error()
			console.log('converting success')
		});

  	res.json(pins[0].data_uri.toString().slice(23));
  })
});

router.post('/upload', upload.single('uploadPhoto'), (req,res) => { //upload 요청시 DB에 저장.//아직 안됨.
	console.log(typeof req.body.data_uri)
	console.log(req.body.data_uri)
	const pin = new Pin({ // UploadView의 form에서 받은 data로 새로운 pin 생성.
		userid: req.body.userid,
		lat: req.body.lat,
		lng: req.body.lng,
		tag: req.body.tag,
		filename: req.body.filename,
		filetype: req.body.filetype,
		data_uri: req.body.data_uri
	});

	pin.save((err, pin)=> { //pin  저장. 
		if(err) { console.error(err) };
		console.log('pin Saved!');
	});
	res.json('pin');
});

export default router;