
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold mb-4 text-accent">404</h1>
        <p className="text-xl text-white/90 mb-8">Page not found</p>
        <p className="text-white/70 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="glass-button px-6 py-3 rounded-md text-white font-medium inline-flex items-center gap-2"
        >
          <Home size={18} />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
