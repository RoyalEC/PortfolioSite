function Projects() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow p-4">

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 border-b-4 border-blue-500 w-fit mx-auto">
          Projects
        </h1>

        <p className="text-center text-gray-100 mb-6">
          Here are some of the projects I've worked on, including school work, personal apps, and tools I've built.
        </p>

        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project Cards will go here */}
          <div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">WGUPS Routing Program</h2>
  <p className="text-sm text-gray-700 dark:text-gray-900 mb-2">
    A Python application that optimizes package delivery routes for a logistics company using a greedy algorithm. Calculates delivery times, total mileage, and supports dynamic status queries at any point in the day.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-blue-500 px-2 py-1 rounded">Python</span>
    <span className="bg-green-500 px-2 py-1 rounded">Greedy Algorithm</span>
    <span className="bg-gray-700 px-2 py-1 rounded">OOP</span>
    <span className="bg-yellow-500 px-2 py-1 rounded">Routing</span>
  </div>
  <div className="mt-4">
    <a href="https://github.com/RoyalEC/RoutingApp" target="_blank" rel="noreferrer">
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Source Code</button>
    </a>
    <a href="https://routingapp-production.up.railway.app/" target="_blank" rel="noreferrer">
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Live App</button>
    </a>
  </div>
</div>

<div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">This Is It! BBQ Website</h2>
  <p className="text-sm text-gray-700 mb-2">
    Designed and developed the official website for <strong>This Is It! BBQ</strong>, a multi-million dollar Southern restaurant chain. The site includes a multi-page layout, responsive design, and engaging content to promote brand identity and drive customer engagement. While no longer an active client, the company continues to use the live website I built.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-blue-500 px-2 py-1 rounded">HTML</span>
    <span className="bg-green-600 px-2 py-1 rounded">CSS</span>
    <span className="bg-yellow-500 px-2 py-1 rounded">JavaScript</span>
    <span className="bg-indigo-600 px-2 py-1 rounded">Responsive Design</span>
    <span className="bg-gray-700 px-2 py-1 rounded">Enterprise Client</span>
  </div>
  <div className="mt-4">
    <a
      href="https://www.thisisitbbq.com/"
      target="_blank"
      rel="noreferrer"
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Visit Live Website
      </button>
    </a>
  </div>
</div>

<div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">Developer Portfolio Website</h2>
  <p className="text-sm text-gray-700 mb-2">
    Designed and built this responsive developer portfolio from scratch using React, Tailwind CSS, and Vite. Includes dark mode, project carousel, downloadable resume, and clean navigation. The app serves as a central hub for showcasing my full-stack development skills and project work.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-blue-600 px-2 py-1 rounded">React</span>
    <span className="bg-indigo-600 px-2 py-1 rounded">Tailwind CSS</span>
    <span className="bg-green-600 px-2 py-1 rounded">TypeScript</span>
    <span className="bg-yellow-500 px-2 py-1 rounded">Responsive Design</span>
    <span className="bg-gray-700 px-2 py-1 rounded">Vite</span>
  </div>
  <div className="mt-4 flex gap-4">
    <a
      href="https://ernie-crews.com"
      target="_blank"
      rel="noreferrer"
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        View Live Site
      </button>
    </a>
    <a
      href="https://github.com/RoyalEC/portfoliosite"
      target="_blank"
      rel="noreferrer"
    >
      <button className="bg-gray-800 text-white px-4 py-2 rounded">
        View GitHub Repo
      </button>
    </a>
  </div>
</div>



          {/* Project Cards will go here */}
          <div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">Shonen Showdown</h2>
  <p className="text-sm text-gray-700 mb-2">
    A 2D fighting game that brings together iconic heroes and villains from the Shonen anime universe. Features fluid animations, unique character abilities, and strategic combat. Built with a love for anime and classic fighting mechanics.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-purple-600 px-2 py-1 rounded">Game Dev</span>
    <span className="bg-pink-600 px-2 py-1 rounded">2D Graphics</span>
    <span className="bg-blue-700 px-2 py-1 rounded">Fighting Engine</span>
    <span className="bg-red-600 px-2 py-1 rounded">Anime-Inspired</span>
  </div>
  <div className="mt-4">
    <a
      href="https://replit.com/@crewsernie8/ShonenShowdown?v=1#.replit"
      target="_blank"
      rel="noreferrer"
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded">View Project</button>
    </a>
  </div>
</div>

          {/* Project Cards will go here */}
       <div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">Labyrinth Sprint</h2>
  <p className="text-sm text-gray-700 mb-2">
    A grid-based maze game featuring single-player and local multiplayer modes against an AI opponent. The game is powered by a C++ backend and a React Native frontend communicating via WebSockets. Future plans include online multiplayer support.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-yellow-500 px-2 py-1 rounded">React Native</span>
    <span className="bg-gray-700 px-2 py-1 rounded">C++</span>
    <span className="bg-green-600 px-2 py-1 rounded">WebSockets</span>
    <span className="bg-indigo-600 px-2 py-1 rounded">Expo</span>
    <span className="bg-pink-600 px-2 py-1 rounded">AI Opponent</span>
  </div>
  <div className="mt-4 flex flex-col sm:flex-row sm:gap-4 gap-2">
    <a href="https://github.com/RoyalEC/CompleteLabyrinthSprint" target="_blank" rel="noreferrer">
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Source Code</button>
    </a>
    <a href="https://completelabyrinthsprint-1.onrender.com" target="_blank" rel="noreferrer">
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Live App</button>
    </a>
  </div>
</div>



          {/* Project Cards will go here */}
          <div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">Class Roster</h2>
  <p className="text-sm text-gray-700 mb-2">
    A C++ console application that reads and processes student data, validates emails, calculates average course durations, and handles object-oriented structures for student records.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-purple-600 px-2 py-1 rounded">C++</span>
    <span className="bg-gray-700 px-2 py-1 rounded">OOP</span>
    <span className="bg-indigo-500 px-2 py-1 rounded">Data Parsing</span>
  </div>
  <div className="mt-4">
    <a href="https://github.com/RoyalEC/Scripting" target="_blank" rel="noreferrer">
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Source Code</button>
    </a>
    <a href="https://scripting-production.up.railway.app/" target="_blank" rel="noreferrer">
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Live App</button>
    </a>
  </div>

</div>

          {/* Project Cards will go here */}
          <div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">D682 AI Optimization Project</h2>
  <p className="text-sm text-gray-700 mb-2">
    A machine learning project that applies optimization algorithms to model performance improvements in an AI/ML environment. Built using Python, NumPy, and a reinforcement learning approach.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-blue-500 px-2 py-1 rounded">Python</span>
    <span className="bg-purple-600 px-2 py-1 rounded">Machine Learning</span>
    <span className="bg-indigo-600 px-2 py-1 rounded">Optimization</span>
    <span className="bg-pink-600 px-2 py-1 rounded">DQN</span>
  </div>
  <div className="mt-4">
    <a href="https://github.com/RoyalEC/OptimizeAI" target="_blank" rel="noreferrer">
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Source Code</button>
    </a>
    <a href="https://web-production-e7c3f.up.railway.app/" target="_blank" rel="noreferrer">
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Live App</button>
    </a>
  </div>
</div>
<div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">D683 Advanced AI & ML Project</h2>
  <p className="text-sm text-gray-700 mb-2">
    An advanced AI/ML pipeline using time series forecasting for energy commodity trading. Built with Python and Pandas, the model integrates rolling predictions, feature engineering, and trading signal evaluation for crude oil (USOIL).
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-blue-500 px-2 py-1 rounded">Python</span>
    <span className="bg-purple-600 px-2 py-1 rounded">Time Series</span>
    <span className="bg-teal-600 px-2 py-1 rounded">Machine Learning</span>
    <span className="bg-yellow-600 px-2 py-1 rounded">Forecasting</span>
    <span className="bg-gray-700 px-2 py-1 rounded">USOIL</span>
  </div>
  <div className="mt-4">
    <a href="https://github.com/RoyalEC/AdvancedAI-ML" target="_blank" rel="noreferrer">
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Source Code</button>
    </a>
    <a href="https://advancedai-ml-production.up.railway.app/" target="_blank" rel="noreferrer">
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Live Endpoints</button>
    </a>
  </div>
</div>
{/* Project Cards will go here */}
<div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">Juice WRLD Web Tribute</h2>
  <p className="text-sm text-gray-700 mb-2">
    A fan-made web tribute to Juice WRLD featuring music previews, biography sections, and stylized visual elements. Built with HTML, CSS, and JavaScript as a responsive static site.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-pink-600 px-2 py-1 rounded">HTML</span>
    <span className="bg-blue-500 px-2 py-1 rounded">CSS</span>
    <span className="bg-yellow-500 px-2 py-1 rounded">JavaScript</span>
    <span className="bg-indigo-600 px-2 py-1 rounded">Web Design</span>
  </div>
  <div className="mt-4">
    <a
      href="https://drive.google.com/file/d/1bm3jmoDRF5pIKaF1C63Rg5-32B-Q_KbJ/view?usp=drive_link"
      target="_blank"
      rel="noreferrer"
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        View Source Code
      </button>
    </a>
  </div>
</div>
{/* Project Cards will go here */}
<div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">D287 Java Frameworks Project</h2>
  <p className="text-sm text-gray-700 mb-2">
    A full-stack web application built using Spring Boot, Hibernate, and Thymeleaf. This project demonstrates CRUD functionality, RESTful endpoints, and integration with a relational database for managing client records.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-orange-600 px-2 py-1 rounded">Java</span>
    <span className="bg-green-600 px-2 py-1 rounded">Spring Boot</span>
    <span className="bg-blue-600 px-2 py-1 rounded">Hibernate</span>
    <span className="bg-purple-700 px-2 py-1 rounded">Thymeleaf</span>
    <span className="bg-gray-700 px-2 py-1 rounded">CRUD</span>
  </div>
  <div className="mt-4">
    <a href="https://github.com/RoyalEC/JavaFramework" target="_blank" rel="noreferrer">
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Source Code</button>
    </a>
    <a href="https://javaframework-production.up.railway.app/mainscreen" target="_blank" rel="noreferrer">
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Live App</button>
    </a>
  </div>
</div>
{/* Project Cards will go here */}
<div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">D387 Advanced Java Project</h2>
  <p className="text-sm text-gray-700 mb-2">
    A Java application that leverages advanced object-oriented principles to manage records and scheduling within a multi-tier architecture. Implements robust exception handling, interface-based design, and layered separation of concerns.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-orange-600 px-2 py-1 rounded">Java</span>
    <span className="bg-blue-700 px-2 py-1 rounded">OOP</span>
    <span className="bg-teal-600 px-2 py-1 rounded">MVC</span>
    <span className="bg-gray-700 px-2 py-1 rounded">Exception Handling</span>
    <span className="bg-green-600 px-2 py-1 rounded">Design Patterns</span>
  </div>
  <div className="mt-4">
    <a href="https://github.com/RoyalEC/JavaWebsite" target="_blank" rel="noreferrer">
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Source Code</button>
    </a>
    <a href="https://javawebsite-production.up.railway.app/" target="_blank" rel="noreferrer">
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto">View Live Endpoints</button>
    </a>
  </div>
</div>

<div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">Practice Project</h2>
  <p className="text-sm text-gray-700 mb-2">
    A sandbox-style practice project used for testing concepts and prototyping ideas across languages and tools. Useful for experimentation, quick learning, and technique validation.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-gray-600 px-2 py-1 rounded">JavaScript</span>
    <span className="bg-blue-500 px-2 py-1 rounded">HTML</span>
    <span className="bg-green-500 px-2 py-1 rounded">Learning</span>
    <span className="bg-indigo-500 px-2 py-1 rounded">Practice</span>
  </div>
  <div className="mt-4">
    <a
      href="https://replit.com/@crewsernie8/EnhancedNumberGuessingGame"
      target="_blank"
      rel="noreferrer"
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        View Source Code
      </button>
    </a>
  </div>
</div>
<div className="bg-gray-100 p-4 rounded shadow">
  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">Small Business Website</h2>
  <p className="text-sm text-gray-700 mb-2">
    Developed a functional, multi-page website for a small business to promote products and engage potential customers. Implemented responsive design, accessibility features, and local storage to enhance user experience. Delivered both desktop layout and mobile adaptation plans.
  </p>
  <div className="flex gap-2 text-sm text-white flex-wrap">
    <span className="bg-blue-500 px-2 py-1 rounded">HTML</span>
    <span className="bg-green-500 px-2 py-1 rounded">CSS</span>
    <span className="bg-yellow-500 px-2 py-1 rounded">JavaScript</span>
    <span className="bg-indigo-500 px-2 py-1 rounded">Responsive Design</span>
    <span className="bg-gray-700 px-2 py-1 rounded">Accessibility</span>
  </div>
  <div className="mt-4">
    <a
      href="https://stackblitz.com/edit/stackblitz-starters-s7fr4tcn?file=package.json"
      target="_blank"
      rel="noreferrer"
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        View Source Code
      </button>
    </a>
  </div>
</div>


          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Projects;

