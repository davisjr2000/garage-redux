import React, { Component} from 'react';

class Car extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.brand}</h2>
      </div>
      )
  }
}

export default Car
