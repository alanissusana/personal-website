/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/girl-stem.jpg";

const imageAltText = "happy version of a girl in tech";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Cómo conseguí mi primer empleo en el mundo Cloud 🎉",
    description:
    "Primera charla realizada con la comunidad de AWS Girls Perú.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Primeros pasos en el mundo tech",
    description:
      "Primera charla en persona en el AWS Community Day Perú 2023.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Primeros pasos en el mundo Cloud usando Azure",
    description:
      "Charla para pasar de MLSA New to Beta!🎉",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "More more, many more soon...",//complete in the future
    description:
      "Many new initiatives coming soon... Don't miss it!",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Goals in life</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem"}}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
