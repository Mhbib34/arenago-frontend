import { useState, useEffect } from "react";
import { MapPin, Search, TrendingUp } from "lucide-react";

const images = [
  "https://i.pinimg.com/1200x/f8/6d/31/f86d319d473b9de7a11945c4299bc7de.jpg",
  "https://i.pinimg.com/736x/34/6c/4a/346c4ab2dc090342fe4a559ba801a1ee.jpg",
  "https://i.pinimg.com/1200x/22/8f/f3/228ff3f0c399637a09b2fb1c9718fd4e.jpg",
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  // Ganti gambar tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const indonesiaProvinces = [
    "Aceh",
    "Bali",
    "Bangka Belitung",
    "Bengkulu",
    "Banten",
    "Bengkalis",
    "DI Yogyakarta",
    "DKI Jakarta",
    "Gorontalo",
    "Jambi",
    "Jawa Barat",
    "Jawa Tengah",
    "Jawa Timur",
    "Kalimantan Barat",
    "Kalimantan Selatan",
    "Kalimantan Tengah",
    "Kalimantan Timur",
    "Lampung",
    "Maluku",
    "Maluku Utara",
    "Nusa Tenggara",
    "Nusa Tenggara Barat",
    "Nusa Tenggara Timur",
    "Papua",
    "Papua Barat",
    "Riau",
    "Riau Kepulauan",
    "Sulawesi Barat",
    "Sulawesi Selatan",
    "Sulawesi Tengah",
    "Sulawesi Tenggara",
    "Sumatera Barat",
    "Sumatera Selatan",
    "Sumatera Utara",
  ];

  return (
    <section
      className="py-12 md:py-20 h-screen bg-cover bg-center transition-all duration-1000 flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-primary/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 text-white">
          <div className="inline-flex items-center gap-2 bg-primary/30 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              Trending #1 Booking Platform
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Booking Lapangan Olahraga
            <span className="block ">Jadi Lebih Mudah</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Temukan dan pesan lapangan olahraga favorit Anda dengan cepat,
            mudah, dan aman. Lebih dari 500+ lapangan siap Anda booking!
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokasi
              </label>
              <MapPin className="absolute left-3 bottom-3 text-gray-400 w-5 h-5" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none bg-white"
              >
                <option value="">Semua Lokasi</option>
                {indonesiaProvinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="w-full mt-4 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg cursor-pointer">
            <Search className="w-5 h-5" />
            Cari Lapangan Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
