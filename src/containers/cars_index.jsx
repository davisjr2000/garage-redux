import React, { Component } from 'react';
import { connect } from 'react-redux';
import Car from '../components/car'
import { bindActionCreators } from 'redux';

class CarsIndex extends Component {
  renderList() {
    return this.props.cars.map((car) => {
      return (
        <Car key={car.id} brand={car.brand}/>
        );
    });
  };

  render() {
    return (
      <div>
         {this.renderList()}
      </div>
      );
  }
};

function mapStateToProps(state) {
   return {
    cars: state.cars
   };
}

export default connect(mapStateToProps)(CarsIndex);
