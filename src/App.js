import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import HotdogBuilder from "./containers/HotdogBuilder/HotdogBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HotdogBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
