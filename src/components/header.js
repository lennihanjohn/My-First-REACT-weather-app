import React from 'react';
import RadioButton from './radio_button.js'

class Header extends React.Component {
  
  // pass the value to parent if the temp unit changes
  onChange = (temp) => {
    this.props.onChange(temp);    
  }

  render() {  
    return (
      <div className="header" >
          <nav className="navbar navbar-light">
              <span className="mb-0 h3 header-font">MyWeatherBot</span>
              <RadioButton onChange={this.onChange.bind(this)}/>
          </nav>
      </div>

    );
  }
}
  
export default Header;