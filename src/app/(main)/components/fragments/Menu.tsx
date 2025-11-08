import Link from "next/link";

type MenuProps = {
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};
const Menu = ({ setIsMenuOpen, className }: MenuProps) => {
  return (
    <>
      <Link
        href="/"
        className={`${className} hover:text-primary font-medium`}
        onClick={() => setIsMenuOpen?.(false)}
      >
        Beranda
      </Link>
      <Link
        href="/fields"
        className={`${className} hover:text-primary font-medium`}
        onClick={() => setIsMenuOpen?.(false)}
      >
        Lapangan
      </Link>
      <Link
        href="/promos"
        className={`${className} hover:text-primary font-medium`}
        onClick={() => setIsMenuOpen?.(false)}
      >
        Promo
      </Link>
      <Link
        href="/faq"
        className={`${className} hover:text-primary font-medium`}
        onClick={() => setIsMenuOpen?.(false)}
      >
        Bantuan
      </Link>
    </>
  );
};

export default Menu;
