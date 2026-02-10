export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1b33] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-tight">
              STAFF UNITED
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Professional business solutions built on clear standards, reliable
              service, and transparent operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#standard"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  The Standard
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@staffunited.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@staffunited.com
                </a>
              </li>
            </ul>
          </div>

          {/* Commitment */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Our Commitment</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Structured workflows supported by modern tooling and AI-assisted
              quality assurance. All work is human-reviewed.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <p>© {currentYear} STAFF UNITED. All rights reserved.</p>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
