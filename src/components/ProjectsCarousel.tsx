import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
 {
    title: 'This Is It! BBQ Website',
    description: 'Live website built for a multi-million dollar restaurant chain. Includes multi-page layout, responsive design, and long-term client usage.',
    live: 'https://www.thisisitbbq.com/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Enterprise Client'],
  },
  {
  title: 'Labyrinth Sprint',
  description: 'A single-player and AI-opponent maze game built with a React Native frontend and C++ backend using WebSockets. Hosted on a free-tier server (please allow up to 2 minutes for spin-up).',
  link: 'https://github.com/RoyalEC/CompleteLabyrinthSprint',
  live: 'https://completelabyrinthsprint-1.onrender.com',
  tags: ['React Native', 'C++', 'WebSockets', 'AI Opponent'],
},
  {
    title: 'WGUPS Routing Program',
    description: 'Optimized package delivery routes using a greedy algorithm.',
    link: 'https://github.com/RoyalEC/RoutingApp',
    live: 'https://routingapp-production.up.railway.app/',
    tags: ['Python', 'Algorithms'],
  },
  {
    title: 'D683 Advanced AI & ML',
    description: 'Time series forecasting pipeline for USOIL trading.',
    link: 'https://github.com/RoyalEC/AdvancedAI-ML',
    live: 'https://advancedai-ml-production.up.railway.app/',
    tags: ['Python', 'Forecasting', 'Machine Learning'],
  }
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
        <div className="bg-white p-6 rounded shadow text-center dark:bg-gray-900 dark:text-white">
          <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {proj.tags.map((tag, i) => (
              <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noreferrer">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  View Source Code
                </button>
              </a>
            )}
            {proj.live && (
              <a href={proj.live} target="_blank" rel="noreferrer">
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  View Live App
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>


  );
};

export default ProjectCarousel;

