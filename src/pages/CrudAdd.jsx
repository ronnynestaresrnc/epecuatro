import axios from "axios";
import React, { createRef, useRef, useState } from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
const CrudAdd = () => {
  let navigate = useNavigate();
  let refNombre = useRef(null);
  let refTutor = useRef(null);
  let refValoracion = useRef(null);
  let refDuracion = useRef(null);
  let refPrecio = useRef(null);
  let refIdEspecialidad = useRef(null);
  const [state, setState] = useState({
    nombre: " ",

    valoracion: 0,
    tutor: " ",
    precio: 0,
    idespecialidad: 1,
    duracion: " ",
  });

  const handleSubmit = (event) => {
    setState({
      nombre: refNombre.current.value,
      valoracion: refValoracion.current.value,
      duracion: refDuracion.current.value,
      precio: refPrecio.current.value,
      tutor: refTutor.current.value,
      idespecialidad: refIdEspecialidad.current.value,
    });
    event.preventDefault();
    console.log(refNombre.current.value);

    axios
      .post("http://androidep.herokuapp.com/add", {
        nombre: refNombre.current.value,
        tutor: refTutor.current.value,
        duracion: refDuracion.current.value,
        precio: refPrecio.current.value,
        idespecialidad: refIdEspecialidad.current.value,
        valoracion: refValoracion.current.value,
      })
      .then((res) => {
        navigate(`/crud-read`);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <h2 className="mb-4">Registrar Curso</h2>
            <Form className="mx-auto" onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Nombre</Label>
                <input type="text" className="form-control" ref={refNombre} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Duracion</Label>
                <input type="text" className="form-control" ref={refDuracion} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Tutor</Label>
                <input type="text" className="form-control" ref={refTutor} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Valoracion</Label>
                <input
                  type="number"
                  className="form-control"
                  ref={refValoracion}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Precio</Label>
                <input type="number" ref={refPrecio} className="form-control" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Seleccionar Especialidad</Label>
                <select
                  defaultValue={1}
                  ref={refIdEspecialidad}
                  className="form-control"
                >
                  <option value="1">Desarrollo Webt</option>
                  <option value="2">Ciencia de Datps</option>

                  <option value="3">Desarrollo de Juegos</option>
                </select>
              </FormGroup>
              <input type="submit" value="grabar" className="btn btn-primary" />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CrudAdd;
