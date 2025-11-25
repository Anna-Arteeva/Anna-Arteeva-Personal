const CustomerLogos = () => {
  const logos = [
    {
      name: "Sumup",
      light: "/logos/sumup-light-theme.png",
      dark: "/logos/sumup-dark-theme.png",
    },
    {
      name: "Remote",
      light: "/logos/remote-light-theme.png",
      dark: "/logos/remote-dark-theme.png",
    },
    {
      name: "Flatpay",
      light: "/logos/flatpay-light-theme.png",
      dark: "/logos/flatpay-dark-theme.png",
    },
    {
      name: "Allianz",
      light: "/logos/allianz-light-theme.png",
      dark: "/logos/allianz-dark-theme.png",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair font-black text-3xl md:text-4xl text-black dark:text-white mb-16 text-center">
          Trained people and Teams from
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img 
                src={logo.light} 
                alt={logo.name} 
                className="h-8 md:h-10 w-auto block dark:hidden opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src={logo.dark} 
                alt={logo.name} 
                className="h-8 md:h-10 w-auto hidden dark:block opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;

