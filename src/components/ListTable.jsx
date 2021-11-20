import React from "react";
import useCharacters from "../hooks/useCharacters";
import RowTable from "../components/RowTable";
const ListTable = () => {
  const characters = useCharacters();
  return (
    <>
      {characters.map((character) => (  
        <RowTable key={character.id} character={character}></RowTable>
      ))}
    </>
  );
};
export default ListTable;
