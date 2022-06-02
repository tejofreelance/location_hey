import React from "react";
import "../scss/header.scss";
import logo from'../img/logo-hey.png';

export default function Header({ title, subTitle }) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
            {/* <img src={"/img/"} width="50" height="50" style="margin: 0 10px;"/> */}
              <h1> <img  src={logo} alt="fireSpot"/> {title}</h1>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
