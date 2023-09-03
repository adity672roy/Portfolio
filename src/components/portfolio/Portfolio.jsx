import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/1.png";
import IMG2 from "../../assests/2.png";
import IMG3 from "../../assests/3.jpg";
import IMG4 from "../../assests/4.jpg";
import IMG5 from "../../assests/5.png";
import IMG6 from "../../assests/6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Ecommerce beauty shop",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Finance Mobile App",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Music Player Mobile App",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Beauty Product E commerce Website",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Platform UI UX Dashboard SaaS Design",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Financial Mobile iOS App",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((dt) => (
          <article key={dt.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={dt.image} alt="" />
            </div>
            <h3>{dt.title}</h3>
            <div className="portfolio__item-cta">
              <a href={dt.github} className="btn" target="_blank">
                Github
              </a>
              <a href={dt.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
        {/* ----------------------- */}
      </div>
    </section>
  );
};

export default Portfolio;
