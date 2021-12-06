import axios from "axios";
import { useEffect, useState } from "react";
const useCourseBySpecialty = (id=1) => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://androidep.herokuapp.com/courses/especialidad/${id}`
      );

      setCategorias(data);
    })();
  }, []);

  return categorias;
};
export default useCourseBySpecialty;
