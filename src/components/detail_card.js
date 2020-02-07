
import React from 'react';
import CapitalizedText from "./capitalized_text";

class DetailCard extends React.Component {

  // convert the temp unit from F to C
  tempFToC(data, unit){
    if (data && unit && unit === "C"){
      return parseInt((data - 32) * 5 / 9)+ '\xB0C'
    }else if (data){
      return data+ '\xB0F'
    }
  } 
  
  render() {  
    return (
      <div className="card detail-card">
        <h5 className="card-header bg-white">{this.props.name || 'Show weather details' }</h5>
        <div className="card-body">
          <div className="row">
          {this.props.temp ? '' : <h5>&emsp;Please select the location</h5>}
          <div className="col-sm-4 col-xs-12">
            <img src={this.props.image} alt={this.props.temp} className="img-responsive rounded detail-img" />
          </div>
            <div className="col-sm-8 col-xs-12">
              <span className="h1 text-secondary">
                {this.tempFToC(this.props.temp, this.props.unit)} <br/>
                {/* capitalize the text */}
                <CapitalizedText text={this.props.weather} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailCard;