function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-6 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">
          My Resume
        </h1>

        {/* Responsive iframe container */}
        <div className="relative w-full h-[500px] sm:h-[700px] md:h-[800px] mb-6">
          <iframe
            src="/WGU-Resume.pdf"
            title="Resume"
            className="w-full h-full border rounded shadow-lg"
          />
        </div>

        {/* Centered download button */}
        <div className="flex justify-center">
          <a
            href="/WGU-Resume.pdf"
            download="WGU-Resume.pdf"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow-md hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;

