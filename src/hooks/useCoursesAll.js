import axios from "axios";
import { useEffect, useState } from "react";
const useCoursesAll = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://androidep.herokuapp.com/courses"
      );

      setCourses(data);
    })();
  }, []);

  return courses;
};
export default useCoursesAll;
