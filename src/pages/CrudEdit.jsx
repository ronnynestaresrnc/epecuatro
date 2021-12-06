import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label } from "reactstrap";
const CrudEdit = () => {
  let navigate = useNavigate();
  let refNombre = useRef(null);
  let refTutor = useRef(null);
  let refValoracion = useRef(null);
  let refDuracion = useRef(null);
  let refPrecio = useRef(null);
  let refIdEspecialidad = useRef(null);
  const [curso, setCurso] = useState([]);
  const [state, setState] = useState({
    nombre: " ",

    valoracion: 0,
    tutor: " ",
    precio: 0,
    idespecialidad: 1,
    duracion: " ",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refNombre.current.value);

    axios
      .put(`https://androidep.herokuapp.com/courses/${id}`, {
        nombre: refNombre.current.value,
        tutor: refTutor.current.value,
        duracion: refDuracion.current.value,
        precio: refPrecio.current.value,
        idespecialidad: refIdEspecialidad.current.value,
        valoracion: refValoracion.current.value,
      })
      .then((res) => {
        navigate(`/crud-read`);
      });
  };

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://androidep.herokuapp.com/courses/${id}`
      );

      setCurso(data);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <h2 className="mb-4">Editar Curso :</h2>
            {curso.map((item) => (
              <Form className="mx-auto" key={item.id} onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="exampleEmail">ID</Label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.id}
                    disabled
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Nombre</Label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.nombre}
                    ref={refNombre}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Duracion</Label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.duracion}
                    ref={refDuracion}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Tutor</Label>
                  <input
                    type="text"
                    className="form-control"
                    ref={refTutor}
                    defaultValue={item.tutor}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Valoracion</Label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.valoracion}
                    ref={refValoracion}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Precio</Label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={item.precio}
                    ref={refPrecio}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Seleccionar Especialidad</Label>
                  <select
                    defaultValue={item.idespecialidad}
                    className="form-control"
                    ref={refIdEspecialidad}
                  >
                    <option value="1">Desarrollo Webt</option>
                    <option value="2">Ciencia de Datos</option>

                    <option value="3">Desarrollo de Juegos</option>
                  </select>
                </FormGroup>
                <input
                  type="submit"
                  value="grabar cambios"
                  className="btn btn-primary"
                />
              </Form>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CrudEdit;
