import axios from "axios";
import { useEffect, useState } from "react";
const useProducts = () => {
  const [products, setCharacters] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://servicios.campus.pe/servicioproveedores.php"
      );

      setCharacters(data);
    })();
  }, []);

  return products;
};
export default useProducts;
