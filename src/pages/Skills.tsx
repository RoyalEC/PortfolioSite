function Skills() {
  const skills = {
    "Languages": [
      "JavaScript", "Python", "Java", "TypeScript", "SQL", "C++", "HTML", "CSS"
    ],
    "Frameworks & Libraries": [
      "React", "React Native", "Expo", "React Navigation", "Spring Boot", "Tailwind CSS", "Node.js", "Vite", "Thymeleaf", "Express.js", "jQuery", "Deep Linking (Mobile)"
    ],
    "Tools & Platforms": [
      "Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel", "Netlify", "Replit", "StackBlitz", "Docker Desktop", "Supabase Auth", "Supabase Storage", "Supabase Realtime", "Push Notifications / In-App Notifications", "EAS Build & Release", "App Store / TestFlight Release Workflow"
    ],
    "Cloud & DevOps": [
      "AWS", "Azure", "Linux", "CI/CD", "Docker", "GitHub Actions", "Railway", "Render", "S3", "CodeCommit", "EC2", "OAuth 2.0 (Twitch Integration)", "Third-Party API Integration (Twitch / RAWG)", "Mobile CI/CD (GitHub Actions)", "E2E Testing (Maestro)"
    ],
    "Databases": [
      "MySQL", "SQL Server", "MongoDB", "PostgreSQL", "SQL Developer", "PostgreSQL Functions (SQL / PL/pgSQL)", "Postgres Triggers", "Row Level Security (RLS)", "Database Policies & Security"
    ],
    "Deployment & Hosting": [
  "Railway",
  "Render",
  "EC2",
  "Elastic Beanstalk",
  "S3 (Static Hosting)",
  "Azure App Service",
  "Azure Static Web Apps"
],
    "Concepts": [
      "OOP", "MVC", "REST APIs", "Agile/SCRUM", "Unit Testing", "TDD", "Accessibility", "Responsive Design", "WebSockets", "JWT Auth", "Realtime Presence / Live Counts", "Feature Flags (Backend-driven)", "Rate Limiting / Anti-Spam Patterns", "Content Moderation (Profile Images)"
    ],
    "Soft Skills": [
      "Technical Writing", "Team Collaboration", "Problem Solving", "Mentoring", "Time Management", "Communication"
    ]
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center border-b-4 border-blue-500 w-fit mx-auto">
          Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full text-base font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
