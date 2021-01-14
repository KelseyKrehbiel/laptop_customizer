import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryTotal from './SummaryTotal';

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
  <SummaryTotal 
  total={props.total}
  USCurrencyFormat={props.USCurrencyFormat}
  />
</section>
 )
}

export default MainSummary;