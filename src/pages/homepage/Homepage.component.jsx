import React from "react";
import HighlightCard from "../../components/highlight-card/highlight-card.component";
import SubhighlighCard from "../../components/subhighlight-card/subhighlight-card.component";
import { Grid } from "semantic-ui-react";

import "./homepage.styles.scss";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [
        {
          description: "'A classic... Beautifully remastered'",
          title: "Resident Evil 2",
          genre: "Horror, TPS",
          ageRating: 18,
          imageUrl: "../../../Nick.png",
          id: "1"
        },
        {
          description: "'Another great addittion'",
          title: "FIFA 19",
          genre: "Sport",
          ageRating: 3,
          imageUrl: "https://i.imgur.com/OsKQfI3.jpg",
          id: "2"
        },
        {
          description: "'Rockstar do it again'",
          title: "Grand Theft Auto 5",
          genre: "Action",
          ageRating: 18,
          imageUrl: "http://i.imgur.com/y2INaOB.jpg",
          id: "3"
        }
      ],
      sections: [
        {
          title: "Genres",
          imageUrl: "https://i.imgur.com/LWFfryq.jpg"
        },
        {
          title: "Top 10",
          imageUrl: "https://i.imgur.com/VEuxLYB.jpg"
        }
      ]
    };
  }

  render() {
    const { games, sections } = this.state;
    return (
      <>
        <h1>G-review</h1>
        <Grid padded centered>
          <Grid.Row columns={3} centered>
            {games.map(g => {
              return (
                <Grid.Column centered>
                  <HighlightCard {...g} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
        <Grid padded centered>
          <Grid.Row columns={2} centered>
            {sections.map(s => {
              return (
                <Grid.Column centered>
                  <SubhighlighCard {...s} />
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
