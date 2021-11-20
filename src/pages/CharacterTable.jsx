import React from "react";
import { Container, Table } from "reactstrap";
import ListTable from "../components/ListTable";

const CharacterTable = () => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Especie</th>
          </tr>
        </thead>
        <tbody>
          <ListTable></ListTable>
        </tbody>
      </Table>
    </Container>
  );
};
export default CharacterTable;
