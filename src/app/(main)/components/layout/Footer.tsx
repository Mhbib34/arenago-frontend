import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-[#5B2E35] rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">ArenaGo</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Platform booking lapangan olahraga #1 di Indonesia. Mudah, cepat,
              dan terpercaya.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                📱
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                📘
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                🐦
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cari Lapangan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cara Booking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Promo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Partner Venue
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} SportBook. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Syarat Layanan
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
