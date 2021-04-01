import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import HotdogBuilder from "./containers/HotdogBuilder/HotdogBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HotdogBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
