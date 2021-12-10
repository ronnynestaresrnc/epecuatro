import axios from "axios";
import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";

const PageNew = () => {
  let [products, setProducts] = useState([]);
  const dime = useProducts();

  useEffect(async () => {
    (async () => {
      const { data } = await axios.get(
        `https://servicios.campus.pe/servicioproveedores.php`
      );
      console.log("eidme", data);
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <br></br>

      <div className="container py-4 ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((item) => (
            <div className="col" key={item.idproveedor}>
              <div
                className="card"
                /*          style="background-image: url(../../assets/banner2.jpg);  height: 18rem;" */
              >
                <br></br>
                <br></br>

                <div className="card-body text-white">
                  <p className="card-text text-muted">
                    Empresa: {item.nombreempresa}
                  </p>
                  <p className="card-text text-muted">
                    Contacto: {item.cargocontacto}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default PageNew;
