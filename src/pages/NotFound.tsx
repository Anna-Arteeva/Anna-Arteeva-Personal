import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-playfair font-black text-5xl text-black dark:text-white mb-4">404</h1>
        <p className="font-raleway text-xl text-gray-700 dark:text-gray-300 mb-6">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="font-playfair text-black dark:text-white underline underline-offset-4 hover:text-design-pink transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
