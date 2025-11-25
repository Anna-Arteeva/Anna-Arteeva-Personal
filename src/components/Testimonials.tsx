import testimonialsData from "../data/testimonials.json";

const Testimonials = () => {

  return (
    <section 
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h3 
          className="font-playfair font-bold text-3xl text-black dark:text-white mb-12 text-center"
        >
          What People Say
        </h3>
        
        {/* Masonry Layout using CSS columns */}
        <div 
          className="columns-1 md:columns-2 lg:columns-3 gap-8"
        >
          {testimonialsData.map((testimonial) => {
            // Determine background class
            const bgClass = !testimonial.backgroundColor 
              ? 'bg-design-bg' 
              : `bg-${testimonial.backgroundColor}`;
            
            return (
              <div 
                key={testimonial.id}
                className={`p-6 rounded-2xl mb-8 break-inside-avoid ${bgClass}`}
              >
              <p className="font-raleway text-gray-700 dark:text-gray-300 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-start gap-3">
                {/* Profile Avatar with Image or Initials */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-design-pink flex items-center justify-center overflow-hidden">
                  {testimonial.profileImage ? (
                    <img 
                      src={testimonial.profileImage} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-playfair font-semibold text-white text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                
                {/* Name and Role */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {testimonial.linkedinUrl ? (
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-playfair font-semibold text-black dark:text-white hover:opacity-70 transition-opacity"
                      >
                        {testimonial.author}
                      </a>
                    ) : (
                      <p className="font-playfair font-semibold text-black dark:text-white">
                        {testimonial.author}
                      </p>
                    )}
                    {testimonial.linkedinUrl && (
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:opacity-70 transition-opacity"
                        aria-label={`View ${testimonial.author}'s LinkedIn profile`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="flex-shrink-0"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="font-raleway text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="inline-block px-3 pb-1 bg-black/10 dark:bg-white/10 rounded-full mt-4">
                <span className="font-raleway text-xs font-semibold text-black dark:text-white">
                  {testimonial.category}
                </span>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

