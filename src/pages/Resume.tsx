

function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block">My Resume</h1>

        <iframe
          src="/LatestResume.pdf"
          title="Resume"
          className="w-full h-[800px] border rounded shadow-lg"
        />
      </div>
        <div className="mb-6">
          <a
            href="/LatestResume.pdf"
            download="LatestResume.pdf"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
    </div>

  );
}

export default Resume;
