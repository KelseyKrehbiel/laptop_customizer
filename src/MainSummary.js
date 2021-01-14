import React from 'react';
import SummaryOption from './SummaryOption';

function MainSummary(props){
    const summary = Object.keys(props.selectedFeature).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selectedFeature[feature];

    return(<SummaryOption 
    featureHash={featureHash}
    feature={feature}
    selectedOption={selectedOption}
    USCurrencyFormat={props.USCurrencyFormat}
    />)
  });
 return(
 <section className="main__summary">
  <h2>Your cart</h2>
  {summary}
  <div className="summary__total">
    <div className="summary__total__label">Total</div>
    <div className="summary__total__value">
      {props.USCurrencyFormat.format(props.total)}
    </div>
  </div>
</section>
 )
}

export default MainSummary;