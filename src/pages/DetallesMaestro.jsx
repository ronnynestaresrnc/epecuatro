import React, { lazy, useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import useCourses from "../hooks/useCourses";
import useCourseBySpecialty from "../hooks/useCourseBySpecialty";
import axios from "axios";

const DetallesMaestro = () => {
  const courses = useCourses();

  const [state, setState] = useState({ active: 0 });
  const [categoriass, setCategoria] = useState([]);

  const seleccionarItem = ({ id }) => {
    setState({ active: id });
    axios
      .get(`https://androidep.herokuapp.com/courses/especialidad/${id}`)
      .then(({ data }) => {
        setCategoria(data);
      });
  };

  return (
    <>
      <section className="container py-5">
        <div className="row">
          <div className="col-4">
            <ListGroup>
              {courses.map((c, i) => (
                <ListGroupItem
                  key={c.id}
                  id={c.id}
                  onClick={() => seleccionarItem(c)}
                  className={c.id == state.active ? "active" : null}
                >
                  {c.nom_especialidad}
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          <div className="col-8">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  table
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  card
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Curso</th>
                      <th scope="col">Duracion</th>
                      <th scope="col">Profesor</th>
                      <th scope="col">Valoracion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoriass.map((item) => (
                      <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{item.duracion}</td>
                        <td> {item.tutor}</td>
                        <td> {item.valoracion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {categoriass.map((item) => (
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Nombre: {item.nombre}</h5>
                          <p className="card-text">Duracion: {item.duracion}</p>
                          <p className="card-text"> Tutor: {item.tutor}</p>
                          <p className="card-text">
                            {" "}
                            Valoracionr: {item.valoracion}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                .C
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DetallesMaestro;
