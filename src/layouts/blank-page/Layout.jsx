import Navbar from './Navbar';  // Make sure the path is correct
import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/background/webb.png')] bg-center">
      {/* Navbar */}
      <Navbar />

      {/* Adding top padding to prevent content from being hidden behind the fixed navbar */}
      <main className="flex-grow pt-16">  {/* Adjust pt-16 according to navbar height */}
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 ClarityCRM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BlankLayout;