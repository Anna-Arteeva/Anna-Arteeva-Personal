const linkClass =
  "cursor-pointer transition-colors duration-300 font-playfair text-black dark:text-white hover:text-design-pink";

const MainNav = () => {
  return (
    <nav className="flex flex-row gap-7 items-center justify-center text-lg">
      <a 
        href="https://medium.com/@annaarteeva" 
        target="_blank" 
        rel="noopener noreferrer"
        className={linkClass}
      >
        Blog
      </a>

      <a 
        href="https://www.linkedin.com/in/annaarteeva/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={linkClass}
      >
        LinkedIn
      </a>
    </nav>
  );
};

export default MainNav;


