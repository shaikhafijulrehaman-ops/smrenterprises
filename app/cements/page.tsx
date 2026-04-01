import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';
import WorkGallery from '@/components/WorkGallery';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cements - SMR Enterprises',
  description: 'Quality cement from ACC, UltraTech and other trusted brands. OPC and PPC cement available at SMR Enterprises, Vijayawada.',
};

const cementTypes = [
  'OPC 43 Grade Cement',
  'OPC 53 Grade Cement',
  'PPC Cement (Portland Pozzolana Cement)',
  'PSC Cement (Portland Slag Cement)',
  'White Cement',
];

const brands = [
  'ACC',
  'UltraTech',
  'Ambuja',
  'JSW',
  'KCP',
  'Bharathi',
  'Nagarjuna',
  'Vicat',
  'Ramco',
  'Dalmia',
  'Shree',
  'Penna',
  'Maha',
  'Raasi',
  'Anjani',
  'Sagar',
];

const cementWorkImages = [
  '/images/banners/cementworks1.webp',
  '/images/banners/cementworks2.avif',
  '/images/banners/cementworks3.webp',
  '/images/banners/cementworksnew.webp',
  '/images/banners/cementworksnew2.webp',
  '/images/banners/cementworksnew3.webp',
];

export default function CementsPage() {
  return (
    <ProductPageLayout
      title="Cements"
      subtitle="Quality cement for all construction needs"
      bannerImage="/images/banners/cement.jpeg"
    >
      <div className="product-list">
        <h2>Types of Cement We Supply</h2>
        <ul>
          {cementTypes.map((cement, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {cement}
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

      <WorkGallery images={cementWorkImages} title="Types of Cement Supply" />
    </ProductPageLayout>
  );
}
