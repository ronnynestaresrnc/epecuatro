import React from "react";
import { Row } from "reactstrap";
import MyCard from "../components/MyCard";
import useCharacters from "../hooks/useCharacters";

const ListCard = () => {
  const characters = useCharacters();
  return (
    <Row className="row row-cols-1 row-cols-md-3 g-4">
      {characters.map((character) => (
        <MyCard key={character.id} character={character} />
      ))}
    </Row>
  );
};
export default ListCard;
