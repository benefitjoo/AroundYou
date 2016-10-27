import mongoose from 'mongoose';
const pinSchema = mongoose.Schema({//뼈대생성
	userid: String,
	data_uri: String,
	lat: Number,
	lng: Number,
	// data: { type: Date, default: Date.now  },
	tag: String, // how does input multiple tag?
	filename: String,
	filetype: String,
});
const Pin = mongoose.model('PinModel',pinSchema)//PinModel:(mongo db collection)생성

// const demoPin = new Pin({
// 	userid: "demo",
// 	lat:37.583248,
// 	lng:126.985183,
// 	tag: "midnight",
// 	photo:""
// });

// demoPin.save((err, pin)=> {
// 	if(err) { console.error(err) };
// 	console.dir(pin);
// })

// 1. 값이 들어가는지 확인 >> 더미값
// 2. 위도/경도값 받아오는지 확인 >> gmaps에서 받아오는 값
// 3. 사용자 입력값 받아오고 >> 사용자가 post 보내는 값 (string)
// 4. img까지 >> img까지

export default mongoose.model('pin', pinSchema);