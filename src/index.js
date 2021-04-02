import React from "react";
import ReactDom from 'react-dom';

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";

import './index.scss';

class App extends React.Component {

  render() {

    return(
      <Layout>
        <BurgerBuilder />
      </Layout>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'));