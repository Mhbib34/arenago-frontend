import { User as UserType } from "@/types/user-type";
import Link from "next/link";
import Menu from "./Menu";
import IsLogginMenu from "./IsLogginMenu";

type MobileMenuProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserType | null;
};

const MobileMenu = ({ setIsMenuOpen, user }: MobileMenuProps) => {
  return (
    <div className="md:hidden py-4 border-t border-gray-200">
      <div className="flex flex-col gap-4">
        {user && (
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg mb-2">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-[#5B2E35] rounded-full flex items-center justify-center text-white font-semibold">
              {user.full_name?.charAt(0).toUpperCase() || "U"}
            </div>
            <div>
              <p className="font-medium text-gray-900">{user.full_name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        )}

        <Menu setIsMenuOpen={setIsMenuOpen} />

        {user ? (
          <div>
            <hr className="border-gray-200" />
            <div className="flex flex-col gap-5 pt-2">
              <IsLogginMenu
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-primary font-medium"
                logutClassName="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium"
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-2 pt-2">
            <Link
              href="/login"
              className="flex-1 px-4 py-2 border border-gray-300 text-center rounded-lg font-medium hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="flex-1 px-4 py-2 bg-linear-to-r from-primary to-[#5B2E35] text-white text-center rounded-lg font-medium hover:opacity-90"
              onClick={() => setIsMenuOpen(false)}
            >
              Daftar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
