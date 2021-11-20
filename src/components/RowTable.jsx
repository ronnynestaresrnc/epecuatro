import React from "react";

const RowTable = ({ character }) => {
  return (
    <tr>
      <th>{character.id}</th>
      <td>{character.name}</td>
      <td>{character.status}</td>
      <td>{character.species}</td>
    </tr>
  );
};
export default RowTable;
