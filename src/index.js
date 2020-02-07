import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js'
import ListCard from './components/list_card.js'
import DetailCard from './components/detail_card.js'

  class App extends React.Component {
    state = {
        name: undefined,
        temp: undefined,
        weather: undefined,
        image: undefined,
        unit: 'F'
    }

    onClick = (city) => {
        this.setState({ 
            name: city.name,
            temp: city.temp,
            weather: city.weather,
            image: city.image,
            unit: this.state.unit ? this.state.unit : 'F'
        })
    }

    onUnitChanged = (unit) => {
        this.setState({ 
            unit: unit,
        })
    }

    render() {
      return (
        <div id='frame'>
            <Header onChange={this.onUnitChanged.bind(this)}/>
            <div className="row mobile-order">
                <div id="list-card" className="col-sm-4 col-xs-12">
                    <div className="card list-card">
                        <h5 className="card-header bg-white">My Locations</h5>
                        <div className="list-group overflow-auto scrollbar">
                            <ListCard onClick={this.onClick.bind(this)} />
                        </div>
                    </div>
                </div>
                <div id="detail-card" className="col-sm-8 col-xs-12">
                    <DetailCard name={this.state.name} temp={this.state.temp} weather={this.state.weather} image={this.state.image} unit={this.state.unit}/>
                </div>
            </div>
        </div>
      );
    }
  }

  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
