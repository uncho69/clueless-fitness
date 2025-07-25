import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-black">CluelessFitness</span>
            </Link>
            <p className="text-gray-600 max-w-md">
              Motivational athletic wear for those who refuse to quit. 
              We fuel relentless mindsets and remind you that average is not an option. 
              When others make excuses, you make progress.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-600 hover:text-black transition-colors duration-200">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 CluelessFitness. All rights reserved. Based in the UK. No Excuses. Just Results.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-black text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-black text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 