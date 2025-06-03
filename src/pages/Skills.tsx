import React from 'react';

function Skills() {
  const skills = {
    "Languages": ["JavaScript", "Python", "Java", "SQL", "HTML", "CSS"],
    "Frameworks & Libraries": ["React", "Spring Boot", "Tailwind CSS", "Node.js", "Vite", "Thymeleaf"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
    "Cloud & DevOps": ["AWS", "Azure", "Linux", "CI/CD", "Docker"],
    "Concepts": ["OOP", "MVC", "REST APIs", "Agile", "Unit Testing", "Accessibility", "Responsive Design"]
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow p-4">

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center border-b-4 border-blue-500 w-fit mx-auto">Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <ul className="list-disc list-inside space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;