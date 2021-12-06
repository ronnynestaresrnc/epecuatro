import React, { useState } from "react";
const CourseDetail = ({ courses }) => {
  const [active, setActive] = useState();

  const handleClick = (event) => {
    event.preventDefault();
    setActive(event.target.id);
  };

  return (
    <li
      aria-current="true"
      className={"list-group-item "}
      onClick={() => console.log("diste click")}
    >
      {courses.nom_especialidad}
    </li>
  );
};
export default CourseDetail;
