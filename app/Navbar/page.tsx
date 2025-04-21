"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            oladoc
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/doctors" className="text-gray-700 hover:text-blue-600 font-medium">
              Doctors
            </Link>
            <Link href="/hospitals" className="text-gray-700 hover:text-blue-600 font-medium">
              Hospitals
            </Link>
            <Link href="/labs" className="text-gray-700 hover:text-blue-600 font-medium">
              Labs and Diagnostics
            </Link>
            <Link href="/surgeries" className="text-gray-700 hover:text-blue-600 font-medium">
              Surgeries
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Health Blog
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <Link
                href="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Login/SignUp
              </Link>
              <Link
                href="/join-doctor"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Join as Doctor
              </Link>
              <div className="flex items-center text-blue-600 font-medium">
                <Phone className="mr-1" size={18} />
                <span>04238900939</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="/doctors"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Doctors
            </Link>
            <Link
              href="/hospitals"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Hospitals
            </Link>
            <Link
              href="/labs"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Labs and Diagnostics
            </Link>
            <Link
              href="/surgeries"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Surgeries
            </Link>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Health Blog
            </Link>

            <div className="pt-2 space-y-3">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Login/SignUp
              </Link>
              <Link
                href="/join-doctor"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Join as Doctor
              </Link>
              <div className="flex items-center justify-center text-blue-600 font-medium py-2">
                <Phone className="mr-2" size={18} />
                <span>04238900939</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;