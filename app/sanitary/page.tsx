import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';
import WorkGallery from '@/components/WorkGallery';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sanitary Products - SMR Enterprises',
  description: 'Premium sanitary ware including basins, commodes, bathtubs, water heaters and bathroom accessories at SMR Enterprises, Vijayawada.',
};

const sanitaryProducts = [
  'Wash Basins',
  'Commodes / Water Closets',
  'Bathtubs',
  'Shower Enclosures',
  'Urinals',
  'Bidets',
];

const bathroomAccessories = [
  'Wall Mixers',
  'Water Heaters / Geysers',
  'Chimneys',
  'Exhaust Fans',
  'Towel Rods',
  'Soap Dishes',
  'Toilet Paper Holders',
  'Bathroom Mirrors',
];

const waterStorage = [
  'Water Tanks',
  'Overhead Tanks',
  'Underground Tanks',
  'Loft Tanks',
];

const sanitaryWorkImages = [
  '/images/banners/sanitoryworks.jpg',
  '/images/banners/sanitoryworks1.jpg',
  '/images/banners/sanitoryworks2.jpg',
  '/images/banners/sanitoryworks3.jpeg',
];

export default function SanitaryPage() {
  return (
    <ProductPageLayout
      title="Sanitary Products"
      subtitle="Premium sanitary ware and bathroom accessories"
      bannerImage="/images/banners/sanitaryandbathroom.jpeg"
    >
      <div className="product-list">
        <h2>Sanitary Ware</h2>
        <ul>
          {sanitaryProducts.map((product, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {product}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-list" style={{ marginTop: '50px' }}>
        <h2>Bathroom Accessories</h2>
        <ul>
          {bathroomAccessories.map((accessory, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {accessory}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-list" style={{ marginTop: '50px' }}>
        <h2>Water Storage Solutions</h2>
        <ul>
          {waterStorage.map((item, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <WorkGallery images={sanitaryWorkImages} title="Types of Sanitary Works" />
    </ProductPageLayout>
  );
}
