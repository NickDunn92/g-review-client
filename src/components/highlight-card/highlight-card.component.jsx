import React from "react";
import { Card, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import "./highlight-card.styles.scss";

const HighlightCard = ({
  id,
  title,
  genre,
  description,
  ageRating,
  imageUrl,
  history
}) => {
  return (
    <Card className={"highlight"} onClick={() => history.push(`/game/${id}`)}>
      <Image src={imageUrl} wrapped />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{genre}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>Age: {ageRating}</a>
      </Card.Content>
    </Card>
  );
};

export default withRouter(HighlightCard);
