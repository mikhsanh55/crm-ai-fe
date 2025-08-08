import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo and App Name */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo/dark.png" className="h-8" alt="App Logo" />
          <span className="self-center text-2xl font-semibold text-gray-900 whitespace-nowrap">
            ClarityCRM
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;