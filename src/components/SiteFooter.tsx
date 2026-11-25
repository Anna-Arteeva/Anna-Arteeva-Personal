const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/annaarteeva/" },
  { label: "Blog", href: "https://medium.com/@annaarteeva" },
  { label: "Maven", href: "https://maven.com/anna-arteeva/prototyping-for-designers" },
  { label: "lets-vibe.com", href: "https://lets-vibe.com" },
];

const SiteFooter = () => (
  <footer className="bg-design-bg rounded-2xl m-4 px-6 py-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-raleway text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Anna Arteeva
      </p>
      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-playfair text-black dark:text-white hover:text-design-pink transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
