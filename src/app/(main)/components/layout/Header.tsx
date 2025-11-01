import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-[#5B2E35] rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">ArenaGo</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Beranda
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Lapangan
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Promo
              </Link>
              <Link
                href="/bookings"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Booking Saya
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Bantuan
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Daftar Gratis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Beranda
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Lapangan
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Promo
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Booking Saya
                </Link>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Bantuan
                </Link>
                <div className="flex gap-2 pt-2">
                  <Link
                    href="/login"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium"
                  >
                    Masuk
                  </Link>
                  <Link
                    href="/register"
                    className="flex-1 px-4 py-2 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg font-medium"
                  >
                    Daftar
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
