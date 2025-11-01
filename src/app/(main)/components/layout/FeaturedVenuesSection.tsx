import { CheckCircle, ChevronRight, Clock, MapPin, Star } from "lucide-react";

const FeaturedVenuesSection = () => {
  const featuredVenues = [
    {
      id: 1,
      name: "Arena Sport Center",
      location: "Jakarta Selatan",
      image: "🏟️",
      rating: 4.8,
      reviews: 124,
      price: 150000,
      sports: ["Futsal", "Basket"],
      facilities: ["Parkir", "Kantin", "Musholla", "Toilet"],
      openHours: "06:00 - 23:00",
      verified: true,
    },
    {
      id: 2,
      name: "Champion Courts",
      location: "Jakarta Pusat",
      image: "🏟️",
      rating: 4.6,
      reviews: 98,
      price: 120000,
      sports: ["Badminton", "Tenis"],
      facilities: ["Parkir", "Kantin", "AC"],
      openHours: "07:00 - 22:00",
      verified: true,
    },
    {
      id: 3,
      name: "Victory Field",
      location: "Jakarta Barat",
      image: "🏟️",
      rating: 4.9,
      reviews: 156,
      price: 180000,
      sports: ["Futsal"],
      facilities: ["Parkir", "Kantin", "Musholla", "Ruang Ganti"],
      openHours: "06:00 - 24:00",
      verified: true,
    },
    {
      id: 4,
      name: "Premium Sports Hub",
      location: "Jakarta Timur",
      image: "🏟️",
      rating: 4.7,
      reviews: 89,
      price: 200000,
      sports: ["Basket", "Voli"],
      facilities: ["Parkir", "Kantin", "AC", "Locker"],
      openHours: "08:00 - 23:00",
      verified: true,
    },
  ];
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Lapangan Terpopuler
            </h2>
            <p className="text-gray-600">Dipilih oleh ribuan pengguna</p>
          </div>
          <button className="text-primafrom-primary hover:text-[#5B2E35] font-semibold flex items-center gap-1">
            Lihat Semua
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-linear-to-br from-primary to-[#5B2E35] flex items-center justify-center text-6xl relative">
                {venue.image}
                {venue.verified && (
                  <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-primafrom-primary" />
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {venue.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{venue.location}</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{venue.rating}</span>
                    <span className="text-gray-500 text-sm">
                      ({venue.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{venue.openHours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {venue.sports.map((sport) => (
                    <span
                      key={sport}
                      className="px-2 py-1 bg-primafrom-primary/10 text-primafrom-primary text-xs rounded-full font-medium"
                    >
                      {sport}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-3 mb-4">
                  <div className="text-xs text-gray-600 mb-2">Fasilitas:</div>
                  <div className="flex flex-wrap gap-2">
                    {venue.facilities.slice(0, 3).map((facility) => (
                      <span key={facility} className="text-xs text-gray-500">
                        • {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-600 block">
                      Mulai dari
                    </span>
                    <div className="text-lg font-bold text-primafrom-primary">
                      Rp {venue.price.toLocaleString("id-ID")}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenuesSection;
