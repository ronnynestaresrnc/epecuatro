import axios from "axios";
import { useEffect, useState } from "react";
const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://androidep.herokuapp.com/especialidades"
      );

      setCourses(data);
    })();
  }, []);

  return courses;
};
export default useCourses;
