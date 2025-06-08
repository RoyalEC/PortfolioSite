import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa';

function Contact() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow p-4">
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Headshot Photo */}
        <img
          src="/HeadshotPhoto.jpg"
          alt="Ernie Crews"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow mb-6"
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 border-b-4 border-blue-500 inline-block">
          Contact Me
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Feel free to reach out to me using any of the following methods:
        </p>

        <div className="space-y-6 sm:space-y-8 text-left text-base sm:text-xl">
          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-blue-600 text-xl sm:text-2xl" />
            <span>
              Send an Email:{' '}
              <a href="mailto:crewsernie8@gmail.com" className="text-blue-600 hover:underline">
                crewsernie8@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <FaPhone className="text-blue-600 text-xl sm:text-2xl" />
            <span>
              Call or Text Me:{' '}
              <a href="tel:+14044218021" className="text-blue-600 hover:underline">
                (404) 421-8021
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <FaLinkedin className="text-blue-600 text-xl sm:text-2xl" />
            <span>
              Connect On LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/ernie-crews"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/ernie-crews
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <FaGithub className="text-blue-600 text-xl sm:text-2xl" />
            <span>
              GitHub:{' '}
              <a
                href="https://github.com/RoyalEC"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/RoyalEC
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <FaBriefcase className="text-blue-600 text-xl sm:text-2xl" />
            <span>
              Portfolio:{' '}
              <a
                href="https://ernie-crews.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                ernie-crews.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;





