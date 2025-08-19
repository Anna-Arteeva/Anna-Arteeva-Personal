import { Link, useLocation } from "react-router-dom";

const MainNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const linkClass = (active: boolean) =>
    `cursor-pointer transition-colors duration-300 font-playfair ${
      active ? 'text-design-pink' : 'text-black dark:text-white hover:text-design-pink'
    }`;

  return (
    <nav className="flex flex-row gap-7 items-center justify-center text-lg">
      <a 
        href="https://medium.com/@annaarteeva" 
        target="_blank" 
        rel="noopener noreferrer"
        className={linkClass(false)}
      >
        Blog
      </a>
      <Link to="/ai-courses" className={linkClass(isActive('/ai-courses'))}>
        AI courses
      </Link>
      <a 
        href="https://www.linkedin.com/in/annaarteeva/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={linkClass(false)}
      >
        LinkedIn
      </a>
    </nav>
  );
};

export default MainNav;


