"use client";
import Header from "./(main)/components/layout/Header";
import HeroSection from "./(main)/components/layout/HeroSection";
import FeaturesSection from "./(main)/components/layout/FeaturesSection";
import StatsSection from "./(main)/components/layout/StatsSection";
import PopularSportSection from "./(main)/components/layout/PopularSportSection";
import PromoSection from "./(main)/components/layout/PromoSection";
import FeaturedVenuesSection from "./(main)/components/layout/FeaturedVenuesSection";
import TestiSection from "./(main)/components/layout/TestiSection";
import CtaSection from "./(main)/components/layout/CtaSection";
import Footer from "./(main)/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Popular Sports */}
      <PopularSportSection />

      {/* Promo Section */}
      <PromoSection />

      {/* Featured Venues */}
      <FeaturedVenuesSection />

      {/* Testimonials */}
      <TestiSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
