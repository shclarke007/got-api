import React, { Component } from 'react';
import './App.css';
import HousesHeader from './components/headers/HousesHeader';
import HousesList from './components/content/HousesList';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[], //change variable name to listOfHouses
      isLoaded:false,
    }
  }

    componentDidMount(){
    fetch('https://www.anapioficeandfire.com/api/houses')
    .then(res =>res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        houses:json,
      })
    });
  }

  render() {
    var {isLoaded, houses} = this.state;
    if(!isLoaded){
      return <div><h3>Loading...</h3></div>
    } else {
      return (
        <div className="app">
          < HousesHeader />
          <HousesList houses={houses}/>
        </div>
      );
    }
  }

}

export default Houses;