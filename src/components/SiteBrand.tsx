import { Link, useLocation } from 'react-router-dom';

interface SiteBrandProps {
  align?: 'left' | 'center';
}

const SiteBrand = ({ align = 'center' }: SiteBrandProps) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  return (
    <Link to="/" className={`select-none block ${alignmentClass} cursor-pointer hover:opacity-80 transition-opacity duration-300`}>
      <h1 className="font-playfair font-black text-3xl text-black dark:text-white leading-none mb-2">Anna Arteeva</h1>
      {isHome && (
        <p className="font-allura text-2xl text-black dark:text-white leading-none">Designer and Design Leader</p>
      )}
    </Link>
  );
};

export default SiteBrand;


