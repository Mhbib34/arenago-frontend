import { Menu, X } from "lucide-react";

type MobileMenuButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuRef: React.RefObject<HTMLButtonElement | null>;
};

const MobileMenuButton = ({
  isMenuOpen,
  setIsMenuOpen,
  mobileMenuRef,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
      }}
      className="md:hidden text-gray-700"
      ref={mobileMenuRef}
    >
      {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

export default MobileMenuButton;
