import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';
import WorkGallery from '@/components/WorkGallery';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pest Control Services - SMR Enterprises',
  description: 'Professional pest control services for residential and commercial spaces in Vijayawada.',
};

const services = [
  'General Pest Control',
  'Termite Treatment',
  'Cockroach Control',
  'Mosquito Control',
  'Rodent Control',
  'Bed Bug Treatment',
  'Ant Control',
  'Lizard Control',
];

const coverage = [
  'Residential Properties',
  'Commercial Buildings',
  'Offices',
  'Warehouses',
  'Restaurants',
  'Hotels',
];

const pestControlWorkImages = [
  '/images/banners/pestcontrol.jpg',
  '/images/banners/pestcontrol1.webp',
  '/images/banners/pestcontrol2.png',
];

export default function ServicePage() {
  return (
    <ProductPageLayout
      title="Pest Control"
      subtitle="Professional pest control services for homes and businesses"
      bannerImage="/images/banners/pestcontrol.jpeg"
    >
      <div className="product-list">
        <h2>Our Pest Control Services</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-list" style={{ marginTop: '50px' }}>
        <h2>Areas We Cover</h2>
        <ul>
          {coverage.map((area, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {area}
            </li>
          ))}
        </ul>
      </div>

      <WorkGallery images={pestControlWorkImages} title="Types of Pest Control Works" />
    </ProductPageLayout>
  );
}
