
import React from 'react';
import axios from 'axios';

  const API_KEY = 'c3f63bbfa91adeb1f9f8d1e96787ca0c'
  const api_call = (`http://api.openweathermap.org/data/2.5/find?lat=45.3&lon=-75.7&cnt=10&appid=${API_KEY}&units=imperial`);
  
  class ListCard extends React.Component {
    // init state
    state = { 
      cities: [],
    }

    // return the image file name as string base on the description
    image_path(description){      
      if (description.includes('rain') ) return '/Rainy.png'
      if (description.includes('cloud') ) return '/Partly Cloudy.png'
      if (description.includes('snow') ) return '/Snowy.png'
      if (description.includes('sun') ) return '/Sunny.png'
    }

    componentDidMount() {
      // axios perform a GET request
      axios.get(api_call).then(res => {
        const list = res.data.list;
        // set state with response params
        this.setState({
          cities: list.map(item => ({
            name: item.name,
            temp: item.main.temp,
            weather: item.weather[0].description,
            image: this.image_path(item.weather[0].description)
          }))
        });
      })
    }

    render() {
      return (
        <div>
          {this.state.cities.map((item) => {
            return  (
              <div>
                <span className="list-group-item list-group-item-action" onClick={() => this.props.onClick(item)} ><img src={item.image} alt={item.weather} className="img-responsive rounded list-img" />    {item.name}, ON</span>
              </div>
            )
          })}
        </div>
      );
    }
  }
  export default ListCard;