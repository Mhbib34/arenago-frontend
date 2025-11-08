import { useState, useEffect } from "react";
import {
  X,
  Store,
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function TenantPromotionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenTenantPromoModal");

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenTenantPromoModal", "true");
  };

  if (!isOpen) return null;

  const benefits = [
    {
      icon: DollarSign,
      title: "Pendapatan Tambahan",
      description: "Dapatkan penghasilan pasif dari lapangan Anda",
    },
    {
      icon: Calendar,
      title: "Kelola Booking Mudah",
      description: "Sistem booking otomatis dan jadwal terorganisir",
    },
    {
      icon: Users,
      title: "Jangkauan Lebih Luas",
      description: "Akses ke ribuan pengguna aktif di platform",
    },
    {
      icon: TrendingUp,
      title: "Analisis Performa",
      description: "Dashboard lengkap untuk monitoring bisnis",
    },
  ];

  const features = [
    "Dashboard manajemen lapangan",
    "Sistem pembayaran aman & otomatis",
    "Notifikasi booking real-time",
    "Laporan pendapatan detail",
    "Support 24/7",
    "Tanpa biaya pendaftaran",
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-100 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
        {/* Header */}
        <div className="relative bg-linear-to-br from-primary to-[#5B2E35] text-white p-8 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Store className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                Jadilah Mitra Penyedia Lapangan
              </h2>
              <p className="text-white/90 mt-1">
                Mulai menghasilkan dengan lapangan Anda!
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mt-6">
            <p className="text-white/95 text-lg">
              🎉 <strong>Promo Spesial!</strong> Daftar sekarang dan dapatkan{" "}
              <strong>0% komisi</strong> untuk 3 bulan pertama
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Benefits Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Keuntungan Jadi Mitra
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-primary to-[#5B2E35] rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Fitur yang Anda Dapatkan
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-linear-to-br from-blue-50 to-purple-50 rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Mitra Aktif</div>
            </div>
            <div className="text-center border-x border-gray-300">
              <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Booking/Bulan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
              <div className="text-sm text-gray-600">Rating Rata-rata</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-8 p-6 bg-white border-2 border-gray-200 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-primary to-[#5B2E35] rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                B
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-900">
                    Budi Santoso
                  </span>
                  <span className="text-sm text-gray-500">
                    • Pemilik Lapangan Futsal
                  </span>
                </div>
                <p className="text-gray-600 italic">
                  &quot;Sejak bergabung dengan ArenaGo, booking lapangan saya
                  meningkat 300%! Sistemnya mudah dan customer support sangat
                  membantu.&quot;
                </p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/tenant-register"
              className="flex-1 bg-linear-to-r from-primary to-[#5B2E35] text-white px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={handleClose}
              className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Mungkin Nanti
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Punya pertanyaan?{" "}
            <a
              href="/faq-tenant"
              className="text-primary hover:underline font-medium"
            >
              Pelajari lebih lanjut
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
