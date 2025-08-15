interface SiteBrandProps {
  align?: 'left' | 'center';
}

const SiteBrand = ({ align = 'center' }: SiteBrandProps) => {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`select-none ${alignmentClass}`}>
      <h1 className="font-playfair font-black text-3xl text-black dark:text-white leading-none">Anna Arteeva</h1>
      <p className="font-allura text-xl text-black dark:text-white leading-none">Designer and Design Leader</p>
    </div>
  );
};

export default SiteBrand;


