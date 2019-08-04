import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Login from "./pages/login/login.component";
import Navbar from "./components/navbar/navbar.component";
import Game from "./pages/game/game.component";

class App extends React.Component {
  state = {
    activeItem: "home"
  };

  handleItemClick = newPage => {
    this.setState({ activeItem: newPage });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}
        />
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route path="/game/:id" component={Game} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
