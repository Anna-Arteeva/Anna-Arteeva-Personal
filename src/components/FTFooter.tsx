
const FTFooter = () => {
  return (
    <footer className="bg-ft-charcoal text-ft-cream">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-ft-salmon font-bold mb-4">About Beautiful Living</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Research Team</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Contributors</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-ft-salmon font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Design Guidelines</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Research Library</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Best Practices</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-ft-salmon font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-ft-salmon font-bold mb-4">Topics</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Urban Design</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Mental Health</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Architecture</a></li>
              <li><a href="#" className="hover:text-ft-salmon transition-colors">Nature Therapy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ft-brown mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-ft-light-brown mb-4 md:mb-0">
            © 2024 Beautiful Living Initiative. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-ft-light-brown hover:text-ft-salmon transition-colors">
              Privacy
            </a>
            <a href="#" className="text-ft-light-brown hover:text-ft-salmon transition-colors">
              Terms
            </a>
            <a href="#" className="text-ft-light-brown hover:text-ft-salmon transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FTFooter;
