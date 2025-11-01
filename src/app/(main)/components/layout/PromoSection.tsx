const PromoSection = () => {
  const promoOffers = [
    {
      title: "Diskon 30% Pengguna Baru",
      description: "Khusus booking pertama",
      code: "NEWUSER30",
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      title: "Promo Weekend",
      description: "Setiap Sabtu-Minggu",
      code: "WEEKEND20",
      bgColor: "from-purple-500 to-purple-600",
    },
    {
      title: "Cashback 50K",
      description: "Min. booking 3x",
      code: "CASHBACK50",
      bgColor: "from-green-500 to-green-600",
    },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Promo Spesial Bulan Ini
          </h2>
          <p className="text-lg text-gray-600">
            Dapatkan penawaran terbaik untuk booking lapangan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promoOffers.map((promo, index) => (
            <div
              key={index}
              className={`bg-linear-to-br ${promo.bgColor} rounded-xl p-6 text-white`}
            >
              <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
              <p className="text-white/90 mb-4">{promo.description}</p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                <span className="font-mono font-bold">{promo.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
