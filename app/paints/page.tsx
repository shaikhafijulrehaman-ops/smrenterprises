import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';
import WorkGallery from '@/components/WorkGallery';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Paints - SMR Enterprises',
  description: 'Quality interior and exterior paints from Asian Paints, Berger, Dulux and Nerolac. Available at SMR Enterprises, Vijayawada.',
};

const paintTypes = [
  'Interior Wall Paints',
  'Exterior Wall Paints',
  'Emulsion Paints',
  'Distemper',
  'Enamel Paints',
  'Primer',
  'Wood Finishes',
  'Metal Paints',
  'Waterproofing Solutions',
  'Texture Paints',
];

const brands = [
  'Asian Paints',
  'Berger',
  'Birla Opus',
  'Nerolac',
  'Dulux',
  'Shalimar',
  'Indigo',
  'Nippon',
  'MRF',
  'Sirca',
];

const paintWorkImages = [
  '/images/banners/paintworks.jpg',
  '/images/banners/paintworks1.jpg',
  '/images/banners/paintworks2.jpeg',
  '/images/banners/paintworks3.jpg',
];

export default function PaintsPage() {
  return (
    <ProductPageLayout
      title="Paints"
      subtitle="Quality interior and exterior paints from leading brands"
      bannerImage="/images/banners/paints.jpeg"
    >
      <div className="product-list">
        <h2>Types of Paints We Supply</h2>
        <ul>
          {paintTypes.map((paint, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {paint}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-list" style={{ marginTop: '50px' }}>
        <h2>Available Brands</h2>
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {brand}
            </li>
          ))}
        </ul>
      </div>

      <WorkGallery images={paintWorkImages} title="Types of Paint Works" />
    </ProductPageLayout>
  );
}
