import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import Header from './Header';
import Map from './Map';
import Upload from './Upload';
import Photo from './Photo';
import Footer from './Footer';
import '!style!css!./../styles/style.css';//css module 찾아보기
//import MapData from './../../data/MapData';
import Login from './Login';
import UploadView from './UploadView';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mapList : [], //default 
      newmarker : false,  //upload click 시 marker 생성시킴 
      pinLocation :{} //uploadView에서 post 로 db에 저장됨. 
    };
    this.loadDataFromServer=this.loadDataFromServer.bind(this);
    this.uploadClick = this.uploadClick.bind(this);
    this.pinDragged = this.pinDragged.bind(this);
  };
  loadDataFromServer(){
    $.ajax({  //ajax call 바로 해서 받은 파일을 this.mapList로 
      type:'GET',
      url:'/data',
      dataType:'jsonp',//??
      success:((data)=> {
         this.setState({mapList: data});
       }).bind(this),      
      error: (err) => {
        console.log('ajax error');
      }
    });
  };
  componentDidMount() {  
    this.loadDataFromServer();
  };
  uploadClick(){ //map에 marker 생성. 
    this.setState({newmarker:true});
  };
  pinDragged(val){
    this.setState({pinLocation:val});
    console.log('val',val);//ok
  }
  mapClick(){ //아직 안씀
    console.log("mpp clicked");
  };
  loginRender(e){ //아직 안씀
    console.log('click?');
  };
  render(){ 
    return (
      <div>
        <div id="header" >
          <div id = "title">
            <div id="outer">
              <div id="inner">
                <Header />
              </div>
            </div>
          </div>
          <div id="login">
            <div id="outer">
              <div id="inner">
               <Login onClick = {this.loginRender}/>
              </div>
            </div>
          </div>
        </div>  
        <div id="map">
          <div id="outer">
            <div id="inner">
              <Map marker={this.state.mapList} newmarker= {this.state.newmarker} onClick= {this.mapClick} onDragged= {this.pinDragged}/>
            </div>
          </div>
        </div >
        <div id="photos">
          <div id="upload">
            <div id="outer">
              <div id="inner">
                <Upload onClick = {this.uploadClick}/>
              </div>
            </div>
          </div>
          <div id="photo">
            <div id="outer">
              <div id="inner">
                { React.Children.map(this.props.children,(child)=> React.cloneElement(child, {sorceValue : this.state.pinLocation})) }
              </div>
            </div>
          </div>
        </div>
        <div id="compare"></div>
        <div id="footer">
          <div id="outer">
            <div id="inner">
                <Footer title={this.props.footerTitle} />
            </div>
          </div>
        </div>
      </div>
    )
  };

};

export default App;
