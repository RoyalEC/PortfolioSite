import React from 'react';
import ProjectCarousel from '../components/ProjectsCarousel';

function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow p-4">

      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 border-b-4 border-blue-500 mx-auto w-fit">
  Portfolio
</h1>

      <div className="max-w-3xl mx-auto text-center">
        {/* Profile Photo */}
        <img
          src="/HeadshotPhoto.jpg"
          alt="Ernie Crews"
          className="w-32 h-32 rounded-full mx-auto shadow mb-4"
        />

        <h1 className="text-4xl font-bold">Ernie Crews III</h1>
        <p className="text-gray-600">Software Developer • WGU Graduate • Tech Builder</p>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="mailto:crewsernie8@gmail.com">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Email</button>
          </a>
          <a href="https://github.com/RoyalEC" target="_blank">
            <button className="bg-gray-800 text-white px-4 py-2 rounded">GitHub</button>
          </a>
          <a href="https://www.linkedin.com/in/ernie-crews" target="_blank">
            <button className="bg-blue-700 text-white px-4 py-2 rounded">LinkedIn</button>
          </a>
        </div>

         <ProjectCarousel />

        <h2 className="text-2xl font-semibold mt-10 mb-4">Professional Experience</h2>

<div className="space-y-6 text-left">

  {/* CGI INC */}
  <div>
    <h3 className="text-lg font-bold">Software Engineer / Software Developer – CGI INC</h3>
    <p className="text-sm text-gray-500">Jun 2024 – Present</p>
    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
      <li>Built scalable .NET applications using MVC, C#, jQuery, Bootstrap, and SQL Server.</li>
      <li>Created custom data models and improved storage/access across systems with SQL Server.</li>
      <li>Implemented CI/CD pipelines via GitHub, AWS CodeCommit, and Azure Repos.</li>
      <li>Practiced SOLID principles, Dependency Injection, and clean code via peer reviews and standards.</li>
      <li>Completed 100+ hours of training to enhance full-stack development skills.</li>
    </ul>
  </div>

  {/* CloudEden */}
  <div>
    <h3 className="text-lg font-bold">Developer – CloudEden, Atlanta, GA</h3>
    <p className="text-sm text-gray-500">Mar 2020 – Mar 2025</p>
    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
      <li>Developed custom websites using Duda, Shopify, WordPress, React, PHP, and JavaScript.</li>
      <li>Enhanced performance, load time, and UX across platforms and devices.</li>
      <li>Used CLI tools for customization, version control, and efficient deployments.</li>
    </ul>
  </div>

  {/* PerScholas */}
  <div>
    <h3 className="text-lg font-bold">Software Engineer Trainee – PerScholas (Remote)</h3>
    <p className="text-sm text-gray-500">Oct 2023 – Feb 2024</p>
    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
      <li>Strengthened front-end skills with React, HTML, CSS, JavaScript, and TypeScript.</li>
      <li>Gained back-end experience with Node.js and Express.js in Agile/SCRUM environments.</li>
      <li>Streamlined CI/CD pipelines for automated testing and deployment.</li>
    </ul>
  </div>
</div>


        <div className="mt-10 text-left">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Azure */}
            <div className="flex items-start gap-4 bg-white p-4 shadow rounded">
              <img src="/certifications/AzureCert.jpg" alt="Azure" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-semibold">Azure Certified Developer Associate</h3>
                <p className="text-sm text-gray-600">Issued by Microsoft</p>
              </div>
            </div>

            {/* AWS */}
            <div className="flex items-start gap-4 bg-white p-4 shadow rounded">
              <img src="/certifications/AWSCert-1.png" alt="AWS" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-semibold">AWS Developer Associate</h3>
                <p className="text-sm text-gray-600">Issued by Amazon Web Services</p>
              </div>
            </div>

            {/* ITIL */}
            <div className="flex items-start gap-4 bg-white p-4 shadow rounded">
              <img src="/certifications/ITILCert.jpg" alt="ITIL" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-semibold">ITIL Foundation</h3>
                <p className="text-sm text-gray-600">Issued by AXELOS</p>
              </div>
            </div>

            {/* AI Optimization Developer */}
            <div className="flex items-start gap-4 bg-white p-4 shadow rounded">
              <img src="/certifications/AICert.png" alt="AI Dev" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-semibold">AI Optimization Developer</h3>
                <p className="text-sm text-gray-600">Issued by Western Governors University</p>
              </div>
            </div>

            {/* Linux Essentials */}
            <div className="flex items-start gap-4 bg-white p-4 shadow rounded">
              {/* <img src="/certifications/java-dev.png" alt="Java Dev" className="w-12 h-12 object-contain" />*/}
              <div>
                <h3 className="font-semibold">Linux Essentials 010</h3>
                <p className="text-sm text-gray-600">Issued by Linux Professional Institute</p>
              </div>
            </div>

            {/* Java Developer */}
            <div className="flex items-start gap-4 bg-white p-4 shadow rounded">
              {/* <img src="/certifications/java-dev.png" alt="Java Dev" className="w-12 h-12 object-contain" />*/}
              <div>
                <h3 className="font-semibold">Java Developer</h3>
                <p className="text-sm text-gray-600">Issued by Western Governors University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
