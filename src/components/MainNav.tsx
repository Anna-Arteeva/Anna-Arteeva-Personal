import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const MainNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkClass = (active: boolean) =>
    `cursor-pointer transition-colors duration-300 font-playfair ${
      active ? 'text-design-pink' : 'text-black dark:text-white hover:text-design-pink'
    }`;

  return (
    <div className="relative">
      <nav className="flex flex-row gap-7 items-center justify-center text-lg">
        <Link to="/ai" className={linkClass(isActive('/ai'))}>
        AI training
        </Link>

        <a 
          href="https://medium.com/@annaarteeva" 
          target="_blank" 
          rel="noopener noreferrer"
          className={linkClass(false)}
        >
          Blog
        </a>

        <a 
          href="https://www.linkedin.com/in/annaarteeva/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={linkClass(false)}
        >
          LinkedIn
        </a>
      </nav>
      
      <ThemeToggle className="fixed top-3 right-3" />
    </div>
  );
};

export default MainNav;


