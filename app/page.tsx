import HeroSlider from '@/components/HeroSlider';
import Highlights from '@/components/Highlights';
import CategoryGrid from '@/components/CategoryGrid';
import BrandsSection from '@/components/BrandsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Highlights />
      <CategoryGrid />
      <BrandsSection />
      <WhyChooseUs />
      <AboutSection />
      <ContactSection />
    </>
  );
}
