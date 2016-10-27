import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class Upload extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
      memo: "upload"
    };
    this.uploadClick=this.uploadClick.bind(this);
	};
  uploadClick(e){
    this.props.onClick(e);
  }
//1. Upload 부분 클릭하면 photo.js에서 UploadView.js 로 내용물 변경. //ok 
//1-2. 포인터 추가.  //ok

  render(){ 
    return (
      <Link to = "upload" onClick={this.uploadClick}>
      <div>{this.state.memo}</div>
      </Link >
    );
  };
};

export default Upload;