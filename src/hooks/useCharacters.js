import axios from "axios";
import { useEffect, useState } from "react";
const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(data.results);
    })();
  }, []);

  return characters;
};
export default useCharacters;
