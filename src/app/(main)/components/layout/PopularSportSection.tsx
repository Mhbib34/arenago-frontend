const PopularSportSection = () => {
  const popularSports = [
    { name: "Futsal", icon: "⚽", count: 45, venues: 38 },
    { name: "Basket", icon: "🏀", count: 32, venues: 25 },
    { name: "Badminton", icon: "🏸", count: 28, venues: 42 },
    { name: "Tenis", icon: "🎾", count: 18, venues: 15 },
    { name: "Voli", icon: "🏐", count: 22, venues: 18 },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Olahraga Populer
          </h2>
          <p className="text-lg text-gray-600">
            Pilih olahraga favorit Anda dan temukan lapangan terbaik
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {popularSports.map((sport) => (
            <button
              key={sport.name}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primafrom-primary hover:shadow-lg transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {sport.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                {sport.name}
              </h3>
              <p className="text-sm text-gray-600">{sport.count} lapangan</p>
              <p className="text-xs text-gray-500 mt-1">{sport.venues} venue</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSportSection;
