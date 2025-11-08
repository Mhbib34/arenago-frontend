"use client";
import React, { useState } from "react";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  FileText,
  Image as ImageIcon,
  CheckCircle,
  ArrowRight,
  Upload,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/fragments/LoadingPage";
import { showError, showSuccess } from "@/lib/sonner";

const TenantRegistrationPage: React.FC = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    description: "",
    logo: null as File | null,
    previewUrl: "",
  });

  const steps = [
    { number: 1, title: "Informasi Dasar", icon: Building2 },
    { number: 2, title: "Kontak & Lokasi", icon: MapPin },
    { number: 3, title: "Detail & Logo", icon: ImageIcon },
  ];

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await axiosInstance.post("/tenants", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: (data) => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        description: "",
        logo: null,
        previewUrl: "",
      });
      queryClient.invalidateQueries({ queryKey: ["tenants"] });
      console.log("Register success:", data);
      setCurrentStep(4);
      showSuccess("Registrasi berhasil, silahkan login ulang.");
      router.push("/login");
    },
    //eslint-disable-next-line
    onError: (error: any) => {
      console.log(error);
      showError("Registrasi gagal, silahkan coba lagi.");
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("address", formData.address);
    data.append("city", formData.city);
    data.append("description", formData.description);
    if (formData.logo) data.append("logo", formData.logo);

    mutation.mutate(data);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== "";
      case 2:
        return (
          formData.email.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.address.trim() !== "" &&
          formData.city.trim() !== ""
        );
      case 3:
        return formData.description.trim() !== "";
      default:
        return false;
    }
  };

  if (mutation.isPending) return <LoadingPage />;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-primary">
        <div className="mx-auto md:px-8 px-4 pt-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="text-lg font-medium text-white/70 hover:text-white "
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-lg font-medium text-white">
                  Tenant Register
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 text-center relative">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold text-primary bg-white">
              Bergabung Sebagai Partner
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white  mb-4">
            Daftarkan Lapangan Anda
          </h1>
          <p className="text-xl  mb-8 max-w-2xl mx-auto text-white">
            Bergabunglah dengan platform booking lapangan terpercaya dan
            tingkatkan bisnis Anda
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white hover:scale-110 transition-all duration-200">
              <Zap className="w-10 h-10 text-white  mb-3 mx-auto" />
              <h3 className=" font-semibold text-white mb-2">Mudah & Cepat</h3>
              <p className=" text-sm text-white">
                Proses pendaftaran simple dan cepat
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white hover:scale-110 transition-all duration-200">
              <Users className="w-10 h-10 text-white mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Jangkauan Luas</h3>
              <p className=" text-sm text-white">
                Akses ke ribuan customer potensial
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white hover:scale-110 transition-all duration-200">
              <Shield className="w-10 h-10 text-white mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">
                Aman & Terpercaya
              </h3>
              <p className=" text-sm text-white">Sistem pembayaran yang aman</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Progress Steps */}
          <div className="bg-primary px-8 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                        currentStep >= step.number
                          ? "text-white shadow-lg bg-primary"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle className="w-6 h-6 text-green-500 hover:scale-125 transition-all duration-200 " />
                      ) : (
                        <step.icon className="w-6 h-6 hover:scale-` 125 transition-all duration-200" />
                      )}
                    </div>
                    <span
                      className={`text-xs mt-2 font-medium text-center  ${
                        currentStep > step.number
                          ? "text-green-500"
                          : "text-white"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-4 rounded-full bg-gray-200 relative -top-3">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          currentStep > step.number
                            ? "bg-green-500 w-full"
                            : "bg-transparent w-0"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {mutation.isSuccess ? (
            <div className="bg-green-500/30 border border-green-500/30 text-green-900 p-4 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <p className="text-sm">Pendaftaran berhasil!</p>
            </div>
          ) : (
            <form className="p-8 md:p-12" onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Informasi Dasar
                    </h2>
                    <p className="text-gray-600">
                      Mulai dengan memberikan informasi dasar tentang bisnis
                      Anda
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Bisnis / Tempat Olahraga *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-gray-400 transition-colors"
                        placeholder="Contoh: Sport Center Medan"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Nama ini akan ditampilkan kepada customer di platform
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Contact & Location */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Kontak & Lokasi
                    </h2>
                    <p className="text-gray-600">
                      Bagaimana customer dapat menghubungi dan menemukan Anda
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-gray-400 transition-colors"
                          placeholder="youremail@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-gray-400 transition-colors"
                          placeholder="+6281234567890"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Alamat Lengkap *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        rows={3}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-gray-400 transition-colors"
                        placeholder="Jl. Contoh No. 123, RT. 01 RW. 01, Kelurahan Contoh, Kecamatan Contoh"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Kota *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-gray-400 transition-colors"
                        placeholder="Jakarta"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Details & Logo */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Detail & Logo
                    </h2>
                    <p className="text-gray-600">
                      Lengkapi profil bisnis Anda untuk menarik lebih banyak
                      customer
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Deskripsi Bisnis *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-gray-400 transition-colors"
                        placeholder="Ceritakan tentang fasilitas, jenis lapangan yang tersedia, dan keunggulan tempat Anda..."
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Minimal 50 karakter. Jelaskan dengan detail agar customer
                      lebih tertarik.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Logo / Foto Tempat (Opsional)
                    </label>

                    <div
                      className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
                      onClick={() =>
                        document.getElementById("logoInput")?.click()
                      }
                    >
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold text-primary">
                          Klik untuk upload
                        </span>{" "}
                        atau drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG atau JPEG (Max. 2MB)
                      </p>
                    </div>

                    <input
                      id="logoInput"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFormData({
                            ...formData,
                            logo: file,
                            previewUrl: URL.createObjectURL(file),
                          });
                        }
                      }}
                    />

                    {formData.previewUrl && (
                      <div className="mt-4 flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Image
                          src={formData.previewUrl}
                          alt="Preview"
                          className="w-12 h-12 rounded object-cover"
                          width={48}
                          height={48}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            Logo uploaded
                          </p>
                          <p className="text-xs text-gray-500">
                            {formData.logo?.name}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Ringkasan Pendaftaran
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Nama Bisnis:</span>
                        <span className="font-medium text-gray-900">
                          {formData.name}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium text-gray-900">
                          {formData.email}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">Telepon:</span>
                        <span className="font-medium text-gray-900">
                          {formData.phone}
                        </span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Kota:</span>
                        <span className="font-medium text-gray-900">
                          {formData.city}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                {currentStep > 1 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1 px-6 py-3 border-2 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    style={{ borderColor: "#5B2E35" }}
                  >
                    Kembali
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={!isStepValid()}
                    className={`flex-1 px-6 py-3 rounded-xl font-medium text-white transition-all flex items-center justify-center gap-2 bg-primary ${
                      !isStepValid()
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:shadow-lg"
                    }`}
                  >
                    Lanjutkan
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid()}
                    className={`flex-1 px-6 py-3 rounded-xl font-medium text-white transition-all flex items-center justify-center gap-2 bg-primary ${
                      !isStepValid()
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:shadow-lg"
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                    Kirim Pendaftaran
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>
            Dengan mendaftar, Anda menyetujui{" "}
            <span className="underline cursor-pointer hover:text-black">
              Syarat & Ketentuan
            </span>{" "}
            kami
          </p>
        </div>
      </div>
    </div>
  );
};

export default TenantRegistrationPage;
