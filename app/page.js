import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import ImageSection from '@/components/ImageSection';
import FeaturesSection from '@/components/FeaturesSection';
import Gallery from '@/components/Gallery';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WelcomeSection />
        <ImageSection />
        <FeaturesSection />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}