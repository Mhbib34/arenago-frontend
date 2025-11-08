import { User as UserType } from "@/types/user-type";
import Link from "next/link";
import IsLogginMenu from "./IsLogginMenu";

type DekstopAuthButtonProps = {
  user: UserType | null;
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userMenuRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
};

const DekstopAuthButton = ({
  user,
  isUserMenuOpen,
  setIsUserMenuOpen,
  userMenuRef,
  className,
}: DekstopAuthButtonProps) => {
  return (
    <div className="hidden md:flex items-center gap-4" ref={userMenuRef}>
      {user ? (
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsUserMenuOpen(!isUserMenuOpen);
            }}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 bg-linear-to-br from-primary to-[#5B2E35] rounded-full flex items-center justify-center text-white font-semibold">
              {user.full_name?.charAt(0).toUpperCase() || "U"}
            </div>
            <span className={`font-medium ${className}`}>{user.full_name}</span>
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">
                  {user.full_name}
                </p>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
              </div>

              <IsLogginMenu
                onClick={() => setIsUserMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                logutClassName="flex items-center gap-3 px-4 text-red-600 hover:text-red-700 font-medium"
              />
            </div>
          )}
        </div>
      ) : (
        <>
          <Link
            href="/login"
            className="text-gray-700 hover:text-primary font-medium"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg hover:opacity-90 font-medium"
          >
            Daftar Gratis
          </Link>
        </>
      )}
    </div>
  );
};

export default DekstopAuthButton;
