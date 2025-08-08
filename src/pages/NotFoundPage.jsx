import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <img
          src="/images/404.svg"  // Replace with an appropriate image or URL
          alt="404 Error"
          className="w-1/2 max-w-sm mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Page not found</h1>
        <p className="text-lg text-gray-600 mb-6">
          It seems like the page you're looking for doesn't exist. Don't worry, you can go back to safety!
        </p>
        <Link
          to="/"
          className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-6 py-3"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;