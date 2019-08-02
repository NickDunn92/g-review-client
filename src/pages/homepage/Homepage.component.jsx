import React from "react";
import HighlightCard from "../../components/highlight-card/highlight-card.component";
import { Grid } from "semantic-ui-react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        {
          description: "Awesome Game",
          title: "Resident Evil 2",
          genre: "Horror, TPS",
          ageRating: 18,
          imageUrl: "https://i.imgur.com/DbRYjQV.jpg"
        },
        {
          description: "Awesome Game",
          title: "Resident Evil 7",
          genre: "Horror, FPS",
          ageRating: 18,
          imageUrl: "https://i.imgur.com/qFtY32C.jpg"
        },
        {
          description: "Awesome Game",
          title: "Grand Theft Auto 5",
          genre: "Action",
          ageRating: 18,
          imageUrl: "http://i.imgur.com/y2INaOB.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <>
        <h1>G-review</h1>
        <Grid columns={3}>
          <Grid.Row>
            {this.state.games.map(g => {
              return (
                <Grid.Column>
                  <HighlightCard {...g} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Homepage;
