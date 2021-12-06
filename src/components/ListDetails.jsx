import React, { useState } from "react";
import { createSearchParams } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import useCourses from "../hooks/useCourses";
import useCourses from "../hooks/useCourses";
import CourseDetail from "./CourseDetail";
const ListDetails = () => {
  const courses = useCourses();
  const [state, setState] = useState({ active: 1});
  

  const seleccionarItem = (event) => {
    console.log(event.id)
    setState({active:event.id})
  };

  return (
    <ListGroup>
      {courses.map((c, i) => (
        <ListGroupItem key={c.id} id={c.id} onClick={() => seleccionarItem(c)} className={c.id ==state.active ? 'active': null}>
          {c.nom_especialidad}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default ListDetails;
