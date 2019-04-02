import React, { Component } from "react";
import { Route } from "react-router-dom";
import DummyData from "./DummyData";
import Nav from "./components/Nav";
import Subnav from "./components/Subnav";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navList: []
    };
  }

  componentDidMount() {
    let newData = DummyData.map(data => {
      return { path: data.name.toLowerCase(), ...data };
    });
    console.log(newData);

    this.setState({
      navList: newData
    });
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => <Nav {...props} navList={this.state.navList} />}
        />
        <Route
          path="/:path"
          render={props => <Subnav {...props} navList={this.state.navList} />}
        />
      </div>
    );
  }
}

export default App;
