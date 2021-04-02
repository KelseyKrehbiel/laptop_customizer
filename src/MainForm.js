import React, { Component } from "react";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import Specs from "./Specs";

class MainForm extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return (
        <Specs
          feature={feature}
          idx={idx}
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default MainForm;
