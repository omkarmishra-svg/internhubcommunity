export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">IH</span>
              </div>
              <span className="text-cyan-600">InternHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Helping students discover and plan their perfect career paths.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-600 transition-colors">
                  Career Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cyan-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 InternHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
