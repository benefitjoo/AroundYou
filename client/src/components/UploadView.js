import React from 'react';
import $ from 'jquery';

//1. Upload 전체 클릭하면 photo.js에서 UploadView.js 로 내용물 변경.  1-2. 포인터 추가....
//2. 포인터를 적당한 위치에 놓으면 UploadView.js 칸에 입력값 뜨고,  
//3. 나머지칸 입력한 뒤 엔터 누르면 db 에 입력값 저장후 원래 photo.js 뜬다. 
class UploadView extends React.Component{
	constructor(props) {
		super(props)
		this.state = {userid: 'ley', lat:0, lng:0, tag:"", filename:"", filetype:"", data_uri:""};
		this.loadMessage = this.loadMessage.bind(this);
    this.sendDataToServer = this.sendDataToServer.bind(this);
    this.setImage = this.setImage.bind(this);
	};
  
  sendDataToServer(){
    console.log('data_uri', this.state.data_uri)
    const data = {
      userid: this.state.userid,
      lat: this.state.lat,
      lng: this.state.lng,
      tag: this.state.tag,
      filename: this.state.filename,
      filetype: this.state.filetype,
      data_uri: this.state.data_uri
    };
    $.ajax({
      type:'POST',
      url:'/upload',
      dataType:'jsonp',
      data: data,
      success: ((datas)=> {
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

  setImage(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (upload) => {
      console.log(upload.target.result);
      this.setState({ filename: file.name, filetype:file.type, data_uri: upload.target.result });  
    }
    reader.readAsDataURL(file);
  }

  render(){
    return (
        <form className="commentForm" action="/upload" encType="multipart/form-data">
          <input type="file" name="uploadPhoto" onChange={this.setImage} />
          <input
            type="text"
            placeholder="Say something..."
            value={this.state.tag}
            onChange={this.loadMessage}
          />
          <p> file: </p>
          
          <input type="submit" value="Post" onClick={this.sendDataToServer}/>

        </form>
    )
  };

};

export default UploadView;

