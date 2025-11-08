import Link from "next/link";

type MenuProps = {
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
const Menu = ({ setIsMenuOpen }: MenuProps) => {
  return (
    <>
      <Link
        href="/"
        className="text-gray-700 hover:text-primary font-medium"
        onClick={() => setIsMenuOpen?.(false)}
      >
        Beranda
      </Link>
      <Link
        href="/fields"
        className="text-gray-700 hover:text-primary font-medium"
        onClick={() => setIsMenuOpen?.(false)}
      >
        Lapangan
      </Link>
      <Link
        href="/promos"
        className="text-gray-700 hover:text-primary font-medium"
        onClick={() => setIsMenuOpen?.(false)}
      >
        Promo
      </Link>
      <Link
        href="/faq"
        className="text-gray-700 hover:text-primary font-medium"
        onClick={() => setIsMenuOpen?.(false)}
      >
        Bantuan
      </Link>
    </>
  );
};

export default Menu;
