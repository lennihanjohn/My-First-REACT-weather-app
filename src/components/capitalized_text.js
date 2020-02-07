import React from 'react';

class CapitalizedText extends React.Component {

  // upper-case the string
  jsUcfirst(str) {
    var splitStr = (str || "").toLowerCase().split(' ');
    // loop each string and capitalized
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
  }
  
  render() {
    return (
      this.jsUcfirst(this.props.text)
    );
  }
};

export default CapitalizedText;