import React from 'react';
import $ from 'jquery';
//1. Upload 전체 클릭하면 photo.js에서 UploadView.js 로 내용물 변경.  1-2. 포인터 추가....
//2. 포인터를 적당한 위치에 놓으면 UploadView.js 칸에 입력값 뜨고,  
//3. 나머지칸 입력한 뒤 엔터 누르면 db 에 입력값 저장후 원래 photo.js 뜬다. 
class UploadView extends React.Component{
	constructor(props) {
		super(props)
		this.state = {userid: 'ley', lat:0, lng:0, tag:""};
		this.loadMessage = this.loadMessage.bind(this);
    this.sendDataToServer = this.sendDataToServer.bind(this);
	};
  
  sendDataToServer(){
    const data = {
      userid: this.state.userid,
		  lat: this.state.lat,
		  lng: this.state.lng,
		  tag: this.state.tag,
		  image:""
    };
	}

  componentwillreceiveprops(){ // test 용 console.log // props가 변화될 때마다 실행 
    console.log('uploadView props', this.props) // Map.js에서 정상적으로 newLng와 newLat가 넘어옴
    console.log('state', this.state)
  }

  // componentWillMount(){
  //   console.log('uploadView props', this.props)
  //   console.log('state', this.state)
  // }

  loadMessage(sth) {
    $.ajax({
      type:'POST',
      url:'/upload',
      dataType:'jsonp',
      data: data, 
      success: ((data)=> {
        console.log('ajax post success');
      }).bind(this),
      error: ((err)=>{
        console.log('ajax post err!!!!!!!!!!!!!!!!!!');
      }).bind(this)
    });
  };

  loadMessage(e) { 
    this.setState({lat:this.props.sorceValue.lat ,lng:this.props.sorceValue.lng ,tag:e.target.value});
  };

  render(){
    return (
        <form className="commentForm">
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.tag}
          onChange={this.loadMessage}
        />
        <input type="submit" value="Post" onClick={this.sendDataToServer}/> 
        </form>    
    )
  };

};

export default UploadView;

