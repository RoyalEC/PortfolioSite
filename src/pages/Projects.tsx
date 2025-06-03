import React from 'react';

function Projects() {
  return (
    <div className="min-h-screen w-full bg-white p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 border-b-4 border-blue-500 w-fit mx-auto">
          Projects
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Here are some of the projects I've worked on, including school work, personal apps, and tools I've built.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project Cards will go here */}
          <div className="bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">WGUPS Routing Program</h2>
            <p className="text-sm text-gray-700 mb-2">Optimized package delivery routes using a greedy algorithm.</p>
            <div className="flex gap-2 text-sm text-white">
              <span className="bg-blue-500 px-2 py-1 rounded">Python</span>
              <span className="bg-green-500 px-2 py-1 rounded">Algorithms</span>
            </div>
            <div className="mt-4">
              <a href="https://drive.google.com/your-link" target="_blank" rel="noreferrer">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">View Project</button>
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

