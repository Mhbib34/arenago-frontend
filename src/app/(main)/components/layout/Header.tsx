import { useAuthStore } from "@/store/auth-store";
import { useEffect, useRef, useState } from "react";
import { useShallow } from "zustand/shallow";
import MobileMenuButton from "../fragments/MobileMenuButton";
import MobileMenu from "../fragments/MobileMenu";
import DekstopAuthButton from "../fragments/DekstopAuthButton";
import Menu from "../fragments/Menu";

const Header = () => {
  const { user } = useAuthStore(
    useShallow((state) => ({
      user: state.user,
      logout: state.logout,
    }))
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLButtonElement | null>(null);

  // Tutup menu ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Detect scroll untuk ubah background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 shadow-sm transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent backdrop-blur-lg"
      }`}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-[#5B2E35] rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
              </div>
              <span
                className={`text-xl font-bold ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                ArenaGo
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Menu className={scrolled ? "text-gray-900" : "text-white"} />
            </div>

            {/* Auth Buttons / User Menu */}
            <DekstopAuthButton
              user={user}
              isUserMenuOpen={isUserMenuOpen}
              setIsUserMenuOpen={setIsUserMenuOpen}
              userMenuRef={userMenuRef}
              className={
                scrolled
                  ? "text-gray-900"
                  : "text-white group-hover:text-gray-900"
              }
            />

            {/* Mobile Menu Button */}
            <MobileMenuButton
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              mobileMenuRef={mobileMenuRef}
            />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <MobileMenu setIsMenuOpen={setIsMenuOpen} user={user} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
