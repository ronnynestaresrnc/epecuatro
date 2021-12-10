import React from "react";
import "./about.css";

import heroImageHome from "./../assets/bgl.jpg";

import BannerHome from "../components/BannerHome";

const Home = () => {
  return (
    <>
      <BannerHome></BannerHome>

      <div className="container boder  mb-4 mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Business Stratag</h5>
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
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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

      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="imgg">
              <img src={heroImageHome} alt="" width="530"></img>
            </div>
          </div>
          <div className="col-6">
            <div className="container">
              <div className="body">
                <h3>Read About Us </h3>
                <h1>Read Company Values </h1>
                <br></br>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam, corrupti nequ e facere est itaque modi minima
                  sint. Explicabo fu git, sint consequuntur sapiente facilis
                  eveniet veniam quis nihil natus in?
                </p>
                <br></br>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h3>Honest</h3>
                      <p>Lorem ipm lorem sin ait a met alallal</p>
                    </div>
                    <div className="col">
                      <h3>Strategyt</h3>
                      <p>Lorem ipmsin ait a met lorem alallal</p>
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col">
                      <h3>Develepone</h3>
                      <p>Lorem ipmsin ait a melorm lromrt alallal</p>
                    </div>
                    <div className="col">
                      <h3>Quality</h3>
                      <p>Lorem ipmsin ait a met alalla lorem loreml</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
