import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./highlight-card.styles.scss";

const HighlightCard = ({ title, genre, description, ageRating, imageUrl }) => {
  return (
    <Card onClick={() => alert(`clicked ${title}`)}>
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

export default HighlightCard;
