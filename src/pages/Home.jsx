import React from "react";
import "./about.css";

import banner1 from "./../assets/mbanner_uno.jpg";
import banner2 from "./../assets/mbanner_dos.jpg";
import banner3 from "./../assets/mbanner_tres.jpg";
import banner4 from "./../assets/mbanner_cuatro.jpg";
import card1 from "./../assets/sv1.svg";
import card2 from "./../assets/sv2.svg";
import card3 from "./../assets/sv3.svg";
import card4 from "./../assets/sv4.svg";
import card5 from "./../assets/cu1.jpeg";
import card6 from "./../assets/cu2.jpeg";
import card7 from "./../assets/cu5.jpeg";
import card8 from "./../assets/cu3.jpeg";
import des1 from "./../assets/vue.jpeg";
import des2 from "./../assets/iot.jpeg";
import des3 from "./../assets/pos.jpeg";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide bg-danger"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block  " alt="banner1"></img>
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block" alt="banner2"></img>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block  " alt="banner3"></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container text-center my-5">
        <h2 className="fs-1">Navega por categoria</h2>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div
              className="card"
              style={
                ({ border: "solid 3px  #928C6F !important" },
                { background: "#EDEBA0" })
              }
            >
              <img
                src={card1}
                className="card-img-top"
                height="170"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Finanzas</h5>
                <p className="card-text">
                  This is a longer card with suppow as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={
                ({ border: "solid 3px  #928C6F !important" },
                { background: "#EDEBA0" })
              }
            >
              <img
                src={card2}
                className="card-img-top"
                height="170"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Trabajar en equipo</h5>
                <p className="card-text">
                  This is a longer cardng text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={
                ({ border: "solid 3px  #928C6F !important" },
                { background: "#EDEBA0" })
              }
            >
              <img
                src={card3}
                className="card-img-top"
                height="170"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Etica Professional</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={
                ({ border: "solid 3px  #928C6F !important" },
                { background: "#EDEBA0" })
              }
            >
              <img src={card7} className="card-img-top" alt="..."></img>

              <div className="card-body">
                <h5 className="card-title">Javascript</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={
                ({ border: "solid 3px  #928C6F !important" },
                { background: "#EDEBA0" })
              }
            >
              <img
                src={card4}
                className="card-img-top"
                height="170"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Linux</h5>
                <p className="card-text">
                  This is a longer cardpporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={
                ({ border: "solid 3px  #928C6F !important" },
                { background: "#EDEBA0" })
              }
            >
              <img src={card5} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Bootstrap</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={
                ({ border: "solid 3px  #928C6F !important" },
                { background: "#EDEBA0" })
              }
            >
              <img src={card6} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Html desde CERO</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={
                ({ border: "solid 3px  #928C6F !important" },
                { background: "#EDEBA0" })
              }
            >
              <img src={card8} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 text-center">
        <h2 className="fs-1">Cursos destacados</h2>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={des1} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Vue 3</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={des3} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Postam </h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={des2} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">IOT</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center  mt-4"></h2>

      <div className="container">
        <h2 className="py-3 my-5">Lista de Nuestros Socios</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Institucion</th>
              <th scope="col">Area</th>
              <th scope="col">Certificados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Isil</td>
              <td>Ingenieria de Software</td>
              <td>No</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>San Marcos</td>
              <td>Ciencias Matematicas</td>
              <td>SI</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Universidas Cesar Vallejo</td>
              <td>Seguridad Informatica</td>
              <td>SI</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container-fluid hero-image  p-0 my-5 m-0">
        <img src={banner4} alt=""></img>
      </div>

      <div className="container text-center">
        <h2 className="">Nuestros Comienzos </h2>
      </div>

      <div className="container hero-secondary my-5">
        <div className="row">
          <div className="col-6">
            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                labore cumque id, laboriosam aliquid sunt quam nam quo neque,
                obcaecati, a doloribus necessitatibus autem harum consectetur
                optio consequatur eum cupiditate modi et unde illum deleniti?
                Cumque, optio dicta. Assumenda, iure repellat voluptates enim
                voluptatibus quae et esse, commodi amet corrupti voluptas. Rem,
                pariatur? Vel magni commodi, esse ipsum sed earum iure illo
                necessitatibus quae nam at distinctio soluta consequatur autem
                facilis porro modi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-5">
        <h2>Nuestro Compromiso</h2>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vero iure, consequatur accusantium at quo adipisci omnis labore
            atque magni pariatur minima fugiat dolore maxime id sunt vitae
            numquam enim voluptates ea! A accusantium nisi quis iste tempore
            ullam eius, quisquam doloribus dolor accusamus esse adipisci
            corporis vero ea itaque veritatis obcaecati quibusdam, repellendus
            sit eligendi modi porro earum sapiente! Corporis, in maiores ea
            ratione a quas, provident, nostrum animi dolore porro voluptas.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="container">
              <img src={banner1} alt="" width="530" height="500"></img>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <h2 className="py-2">Validez al 100% </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis inventore animi quaerat quos voluptas quasi, enim
                exercitationem esse nemo odio cupiditate voluptatum laudantium.
                Soluta dolore eveniet ullam aliquam, architecto atque itaque
                possimus iste, reprehenderit doloribus consequatur adipisci
                minima assumenda dolor perspiciatis! Id asperiores nihil ullam
                nesciunt dolor consequuntur officiis blanditiis amet nobis
                ratione. Consequuntur distinctio pariatur ullam id fuga.
                Repudiandae aspernatur eaque eligendi dolorem reiciendis optio
                hic inventore, aliquam consequatur dolor archito at aspernatur
                earum ducimus, consectetur, dignissimos quam? Aliquam magnam
                necessitatibus excepturi fuga! Molestiae dolorum harum suscipit
                et quasi. Laboriosam, ex, atque eveniet quidem reprehenderit
                veniam voluptatem odio quos ratione molestiae repellat error
                culpa praesentium itaque commodi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center py-5">
        <h4 className="py-3 my-5 mb-5 fs-2">Los mejores instructores</h4>
        <div className="row">
          <div className="col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1624981629285-d2426ae83a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjcxMDIyNQ&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
              className="rounded-circle"
              width="170"
              height="180"
            ></img>

            <h2>Juan Riquelme</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a
                className="btn  btn-secondary text-dark"
                href="#"
                style={
                  ({ border: "solid 3px  #928C6F !important" },
                  { background: "#EDEBA0" })
                }
              >
                Ver mas »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1631311394618-26d3069959cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjcxMDE2OA&ixlib=rb-1.2.1&q=80&w=1080"
              alt=""
              className="rounded-circle"
              width="170"
              height="180"
            ></img>
            <h2>Claudio Pizarro</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a
                className="btn  btn-secondary text-dark"
                href="#"
                style={
                  ({ border: "solid 3px  #928C6F !important" },
                  { background: "#EDEBA0" })
                }
              >
                Ver mas »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1630361084015-9a5bf5f4950e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjcwOTc5MA&ixlib=rb-1.2.1&q=80&w=800"
              alt=""
              className="rounded-circle"
              width="170"
              height="180"
            ></img>

            <h2>Santiago Insane</h2>
            <p>
              And lastly this, the third column of representative placeholdere
              placeholdere placeholdere placeholder content.
            </p>
            <p>
              <a
                className="btn  btn-secondary text-dark"
                href="#"
                style={
                  ({ border: "solid 3px  #928C6F !important" },
                  { background: "#EDEBA0" })
                }
              >
                Ver mas »
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
