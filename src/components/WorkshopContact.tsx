export default function WorkshopContact() {
  return (
    <div className="w-full py-20 px-4 md:px-12  bg-design-bg rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="font-playfair font-black text-3xl md:text-4xl lg:text-5xl text-black dark:text-white mb-6">
            Ready to upskill?
          </h2>
          <p className="font-raleway text-lg text-gray-800 dark:text-gray-200 leading-relaxed mx-auto max-w-3xl">
            Book a free 30-minute consultation to discuss how we can collaborate.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          
            <div className="w-full h-[600px] md:h-[700px] shadow-lg rounded-3xl ">
              <iframe
                src="https://calendly.com/anna_arteeva/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a consultation with Anna"
                className="rounded-2xl"
              />
            </div>
        </div>
      </div>
    </div>
  )
}
