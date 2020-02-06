import React from 'react';

class RadioButton extends React.Component {
    handleChange(e) {
      this.props.onChange(e.target.value);    
    }
    render() {  
      return (  
        <div className="float-right radio-group" onChange={this.handleChange.bind(this)}>
            <input type="radio" id="option-one"  value="F" name="selector" defaultChecked/>
            <label className="radio-label" htmlFor="option-one">°F</label>
            <input type="radio" id="option-two"  value="C" name="selector" />
            <label className="radio-label" htmlFor="option-two">°C</label>
        </div>
      );
    }
  }

  export default RadioButton;