
import React from 'react';
import CapitalizedText from "./capitalized_text";

class DetailCard extends React.Component {
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
        <h5 className="card-header bg-white">{this.props.name}</h5>
        <div className="card-body">
          <div class="row">
          <div class="col-sm-4 col-xs-12">
            <img src={this.props.image} alt={this.props.temp} className="img-responsive rounded detail-img" />
          </div>
            <div class="col-sm-8 col-xs-12">
              <span className="h1 text-secondary">
                {this.tempFToC(this.props.temp, this.props.unit)} <br/>
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