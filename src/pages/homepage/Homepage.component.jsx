import React from "react";
import HighlightCard from "../../components/highlight-card/highlight-card.component";
import SubhighlighCard from "../../components/subhighlight-card/subhighlight-card.component";
import { Grid } from "semantic-ui-react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [
        {
          description: "'A classic, beautifully Remastered'",
          title: "Resident Evil 2",
          genre: "Horror, TPS",
          ageRating: 18,
          imageUrl: "https://i.imgur.com/HKDF9hj.jpg"
        },
        {
          description: "'Another great addittion'",
          title: "FIFA 19",
          genre: "Sport",
          ageRating: 3,
          imageUrl: "https://i.imgur.com/OsKQfI3.jpg"
        },
        {
          description: "'Rockstart do it again'",
          title: "Grand Theft Auto 5",
          genre: "Action",
          ageRating: 18,
          imageUrl: "http://i.imgur.com/y2INaOB.jpg"
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
        <Grid columns={3}>
          <Grid.Row>
            {games.map(g => {
              return (
                <Grid.Column>
                  <HighlightCard {...g} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
        <Grid columns={2}>
          <Grid.Row>
            {sections.map(s => {
              return (
                <Grid.Column>
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
