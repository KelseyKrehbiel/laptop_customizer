import React from "react";
import Parts from './Parts';

function Specs(props) {
  const {feature,idx,features,selected,updateFeature} = props;
  const featureHash = feature + "-" + idx;
  const options = features[feature].map((item) => {
    return <Parts
      item = {item}
      feature = {feature}
      selected = {selected}
      updateFeature = {updateFeature}
    />
  });

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
export default Specs;
