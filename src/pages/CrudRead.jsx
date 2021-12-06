import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCoursesAll from "../hooks/useCoursesAll";

const CrudRead = () => {
  const [categorias, setCurso] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://androidep.herokuapp.com/courses`
      );

      setCurso(data);
    })();
  }, []);
  let navigate = useNavigate();

  const eliminarItem = ({ id }) => {
    console.log(id);

    axios
      .delete(`https://androidep.herokuapp.com/courses/${id}`)
      .then((res) => {
        (async () => {
          const { data } = await axios.get(
            `https://androidep.herokuapp.com/courses`
          );

          setCurso(data);
        })();
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Curso</th>
                <th scope="col">Duracion</th>
                <th scope="col">Profesor</th>
                <th scope="col">Valoracion</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((item) => (
                <tr key={item.id} id={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.duracion}</td>
                  <td> {item.tutor}</td>
                  <td> {item.valoracion}</td>
                  <td>
                    <Link
                      className="btn btn-warning mx-2"
                      to={"/crud-editar/" + item.id}
                    >
                      Edit
                    </Link>
                    <button
                      id={item.id}
                      className="btn btn-danger"
                      onClick={() => eliminarItem(item)}
                    >
                      delet
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CrudRead;
