import { MapPin, Search, TrendingUp } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  return (
    <section className="bg-linear-to-br from-gray-50 via-white to-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primafrom-primary/10 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primafrom-primary" />
            <span className="text-sm font-semibold text-primafrom-primary">
              Trending #1 Booking Platform
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Booking Lapangan Olahraga
            <span className="block text-primafrom-primary">
              Jadi Lebih Mudah
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan dan pesan lapangan olahraga favorit Anda dengan cepat,
            mudah, dan aman. Lebih dari 500+ lapangan siap Anda booking!
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sport/Venue Search */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cari Lapangan
              </label>
              <Search className="absolute left-3 bottom-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Futsal, Basket, Badminton..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primafrom-primary focus:ring-2 focus:ring-primafrom-primary/20"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokasi
              </label>
              <MapPin className="absolute left-3 bottom-3 text-gray-400 w-5 h-5" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primafrom-primary focus:ring-2 focus:ring-primafrom-primary/20 appearance-none bg-white"
              >
                <option value="">Semua Lokasi</option>
                <option value="jakarta-selatan">Jakarta Selatan</option>
                <option value="jakarta-pusat">Jakarta Pusat</option>
                <option value="jakarta-barat">Jakarta Barat</option>
                <option value="jakarta-timur">Jakarta Timur</option>
                <option value="jakarta-utara">Jakarta Utara</option>
              </select>
            </div>
          </div>

          <button
            // onClick={handleSearch}
            className="w-full mt-4 py-3 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
          >
            <Search className="w-5 h-5" />
            Cari Lapangan Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
