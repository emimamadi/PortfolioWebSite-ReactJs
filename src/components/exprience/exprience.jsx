import React from "react";

import "./exprience.css";

import { BsPatchCheckFill } from "react-icons/bs";

const exprience = () => {
  return (
    <section id="exprience">
      <h5>What Skills I Have</h5>
      <h2>My Exprience</h2>

      <div className="container exprience__container">
        <div className="exprience__frontend">
          <h3>Frontend Development</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="exprience__details-icon"/>
              <div>
                <h4>REACT</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Frontend  */}

        <div className="exprience__backend">
          <h3>Backend Development</h3>
          <div className="exprience__content">
            <article className="exprience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MangoDB</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>MySql</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>

            <article className="exprience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Exprienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default exprience;
