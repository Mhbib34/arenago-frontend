import { showConfirm } from "@/lib/sonner";
import { useAuthStore } from "@/store/auth-store";
import { Calendar, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";

type IsLogginProps = {
  onClick: () => void;
  className?: string;
  logutClassName?: string;
};

const IsLogginMenu = ({
  onClick,
  className,
  logutClassName,
}: IsLogginProps) => {
  const router = useRouter();
  const { logout } = useAuthStore(
    useShallow((state) => ({
      logout: state.logout,
    }))
  );

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <>
      <Link
        href="/profile"
        className={`cursor-pointer ${className}`}
        onClick={onClick}
      >
        <User className="w-5 h-5" />
        Profil Saya
      </Link>
      <Link
        href="/bookings"
        onClick={onClick}
        className={`cursor-pointer ${className}`}
      >
        <Calendar className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          Riwayat Booking
        </span>
      </Link>
      <Link
        href="/settings"
        className={`cursor-pointer ${className}`}
        onClick={onClick}
      >
        <Settings className="w-5 h-5" />
        Pengaturan
      </Link>

      <hr className="my-2 border-gray-200" />

      <button
        onClick={() => {
          showConfirm(
            "Keluar",
            "Apakah anda yakin ingin keluar?",
            () => handleLogout(),
            "Keluar"
          );
        }}
        className={`cursor-pointer ${logutClassName}`}
      >
        <LogOut className="w-5 h-5" />
        Keluar
      </button>
    </>
  );
};

export default IsLogginMenu;
