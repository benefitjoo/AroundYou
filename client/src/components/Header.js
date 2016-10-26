import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      headerBigTitle : "Around You",
    };
  };

  render(){
    return (
      <div>

        <h1>{this.state.headerBigTitle}</h1>
        <i>CodeStates GreenField Project</i>

      </div>
    );
  };

};

export default Header;
