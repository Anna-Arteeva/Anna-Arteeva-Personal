import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface SiteBrandProps {
  align?: 'left' | 'center';
}

const SiteBrand = ({ align = 'center' }: SiteBrandProps) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className="relative">
      <Link to="/" className={`select-none block ${alignmentClass} cursor-pointer hover:opacity-80 transition-opacity duration-300`}>
        {/* Not an <h1>: each page has its own main heading */}
        <p className="font-playfair font-black text-3xl text-black dark:text-white leading-none mb-2">Anna Arteeva</p>
        {isHome && (
          <p className="font-allura text-2xl text-black dark:text-white leading-none">Design leader turned AI educator</p>
        )}
      </Link>
      
      <div className="absolute right-0 top-1 -translate-y-1/2">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default SiteBrand;


