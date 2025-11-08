"use client";

import { Users, Mail, Phone, Camera } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { User } from "@/types/user-type";
import { useAuthStore } from "@/store/auth-store";
import { useShallow } from "zustand/shallow";
import LoadingPage from "@/components/fragments/LoadingPage";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function ProfilePage() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(["user"]);
  const { loading } = useAuthStore(
    useShallow((state) => {
      return {
        loading: state.loading,
      };
    })
  );

  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between flex-col md:flex-row gap-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Profil Saya</h1>
            <p className="text-gray-600 mt-1">Kelola informasi profil Anda</p>
          </div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href="/"
                      className="text-lg font-medium text-gray-500 hover:text-gray-700"
                    >
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-lg font-medium text-gray-700">
                    Profil
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Sidebar - Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 bg-linear-to-br from-primary to-[#5B2E35] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    {user?.full_name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:bg-gray-50 transition-colors">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <h2 className="mt-4 text-xl font-bold text-gray-900">
                  {user?.full_name || "User"}
                </h2>
                <p className="text-sm text-gray-500">{user?.email}</p>

                {/* Role Badge */}
                <div className="mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {user?.role === "customer"
                    ? "Customer"
                    : user?.role || "User"}
                </div>

                {/* Stats */}
                <div className="w-full mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Total Booking
                      </span>
                      <span className="font-semibold text-gray-900">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Member Sejak
                      </span>
                      <span className="font-semibold text-gray-900">
                        {user?.created_at
                          ? new Date(user.created_at).toLocaleDateString()
                          : "-"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Data Pribadi
              </h3>

              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={user?.full_name || ""}
                      disabled
                      className="w-full pl-10 pr-4 py-3 border rounded-lg bg-gray-50 border-gray-200 text-gray-700"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={user?.email || ""}
                      disabled
                      className="w-full pl-10 pr-4 py-3 border rounded-lg bg-gray-50 border-gray-200 text-gray-700"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={user?.phone || ""}
                      disabled
                      className="w-full pl-10 pr-4 py-3 border rounded-lg bg-gray-50 border-gray-200 text-gray-700"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
