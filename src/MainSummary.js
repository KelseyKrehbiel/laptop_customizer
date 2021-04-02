import React from "react";
import SummaryOption from "./SummaryOption";
import SummaryTotal from "./SummaryTotal";


function MainSummary(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = props.selected[feature];

    return (
      <SummaryOption
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <SummaryTotal
        total={props.total}
      />
    </section>
  );
}

export default MainSummary;
