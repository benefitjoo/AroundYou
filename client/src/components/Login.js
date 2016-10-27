import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';//npm install --save react-google-login
import $ from 'jquery';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userId : "Login with Google",
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  };

  responseGoogle(googleUser) {  //1. 구글 로그인 클릭하면 token 받음 
    // // Useful data for your client-side scripts:
    // const profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail());
    // // The ID token you need to pass to your backend:
    const id_token = googleUser.getAuthResponse().id_token;//standard JWT         

    $.ajax({  //ajax 이용해 서버에 token 보내거나, 구글에 보낸다.
      type:'GET',
      url:'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+ id_token,
      dataType:'jsonp',//??
      success:((data)=> {
        console.log('get decoded token from google? ',data);
        this.setState({userId:data.name})  
       }).bind(this),      
      error: (err) => {
        console.log('decoding error');
      }
    });
  };

  render(){
    return (
       <GoogleLogin
          clientId={'575542404406-2tmhfcb24ol4p7kiq6ke4380ma6apfdg.apps.googleusercontent.com'}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          offline={false}
        >
        <span>{this.state.userId}</span>
        </GoogleLogin>  
    );
  };
};

export default Login;
