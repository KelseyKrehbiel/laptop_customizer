import React from 'react';
import FeatureItem from './FeatureItem';
import Feature from './Feature';
import slugify from 'slugify';

function MainForm(props){
  const features = Object.keys(props.features).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const options = props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    const featureName = props.selectedFeature[feature].name;
    return <FeatureItem item={item} 
    itemHash={itemHash} 
    feature={feature} 
    USCurrencyFormat={props.USCurrencyFormat} 
    featureName={featureName} 
    onUpdateFeature = {props.onUpdateFeature}
    />
  });

  return (
    <Feature 
    featureHash={featureHash}
    feature={feature}
    options={options}
    />
  );
});
  
  return(
  <form className="main__form">
    <h2>Customize your laptop</h2>
    {features}
  </form>
  )
}

export default MainForm;