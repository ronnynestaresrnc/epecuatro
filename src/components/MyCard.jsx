import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
} from "reactstrap";

const MyCard = ({ character }) => {
  const imageCharacter = character.image;

  return (
    <Col>
      <Card>
        <CardImg alt="Card image cap" src={imageCharacter} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{character.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {character.species}
          </CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MyCard;
