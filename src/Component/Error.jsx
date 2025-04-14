import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
        alt="404 Not Found"
        className="w-full max-w-md mb-6 animate-pulse"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for might have been removed, had its
        name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
      >
        🔙 Go to Homepage
      </Link>
    </div>
  );
};

export default Error;
