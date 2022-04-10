import React from "react";
import "./portfolio.css";
import IMG1 from "../../asset/portfolio1.jpg";
import IMG2 from "../../asset/portfolio2.jpg";
import IMG3 from "../../asset/portfolio3.jpg";
import IMG4 from "../../asset/portfolio4.jpg";
import IMG5 from "../../asset/portfolio5.png";
import IMG6 from "../../asset/portfolio6.jpg";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
