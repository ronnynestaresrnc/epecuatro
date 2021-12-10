import axios from "axios";
import { useEffect, useState } from "react";
const useProducts = () => {
  const [products, setCharacters] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://servicios.campus.pe/servicioproveedores.php"
      );
      console.log(data);
      setCharacters(data.results);
    })();
  }, []);

  return products;
};
export default useProducts;
