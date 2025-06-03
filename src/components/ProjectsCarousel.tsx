import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: 'WGUPS Routing Program',
    description: 'Optimized package delivery routes using a greedy algorithm.',
    link: 'https://drive.google.com/file/d/1UvvErKl_HcwwBtO3CqrXoYMf8d1eGSwT/view?usp=drive_link',
    tags: ['Python', 'Algorithms'],
  },
  {
    title: 'D683 Advanced AI & ML',
    description: 'Time series forecasting pipeline for USOIL trading.',
    link: 'https://drive.google.com/file/d/1bm3jmoDRF5pIKaF1C63Rg5-32B-Q_KbJ/view?usp=drive_link',
    tags: ['Python', 'Forecasting', 'Machine Learning'],
  },
  {
    title: 'Juice WRLD Tribute Website',
    description: 'Static HTML/CSS tribute site with visuals and media.',
    link: 'https://drive.google.com/file/d/1bm3jmoDRF5pIKaF1C63Rg5-32B-Q_KbJ/view?usp=drive_link',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
      <Slider {...settings}>
        {projects.map((proj, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-4">{proj.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noreferrer">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  View Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;

