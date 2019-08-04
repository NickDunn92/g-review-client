import React from "react";
import { withRouter } from "react-router-dom";

class Game extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Game</h1>
        <h2>{this.props.match.params.id}</h2>
      </>
    );
  }
}

export default withRouter(Game);
