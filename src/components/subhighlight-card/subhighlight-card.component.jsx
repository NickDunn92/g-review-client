import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./subhighlight-card.styles.scss";

const SubhighlightCard = ({ title, imageUrl }) => {
  return (
    <Card className={"subcard"} onClick={() => alert(`clicked ${title}`)}>
      <Image src={imageUrl} wrapped />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default SubhighlightCard;
