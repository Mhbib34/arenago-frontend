import { Award, Shield, Users, Zap } from "lucide-react";
import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Booking Instan",
      description: "Proses booking cepat dalam hitungan detik tanpa ribet",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pembayaran Aman",
      description: "Sistem pembayaran terenkripsi dan terpercaya",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Lapangan Verified",
      description: "Semua lapangan telah diverifikasi dan berkualitas",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support",
      description: "Tim support siap membantu 24/7",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Pilih ArenaGo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen memberikan pengalaman booking terbaik untuk Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-primafrom-primary"
            >
              <div className="w-14 h-14 bg-linear-to-br from-primary to-[#5B2E35] rounded-lg flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
