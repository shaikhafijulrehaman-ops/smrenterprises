import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pipes & Fittings - SMR Enterprises',
  description: 'PVC, CPVC and UPVC pipes from Astral and Finolex. Complete plumbing solutions at SMR Enterprises, Vijayawada.',
};

const pipeTypes = [
  'PVC Pipes',
  'CPVC Pipes',
  'UPVC Pipes',
  'SWR Pipes',
  'Agriculture Pipes',
  'Casing Pipes',
  'Column Pipes',
  'Garden Pipes',
];

const fittings = [
  'Elbows',
  'Tees',
  'Reducers',
  'Couplings',
  'End Caps',
  'Valves',
  'Unions',
  'Clamps',
];

const brands = [
  'Astral Pipes',
  'Finolex Pipes',
  'Supreme Pipes',
  'Prince Pipes',
];

export default function PipesPage() {
  return (
    <ProductPageLayout
      title="Pipes & Fittings"
      subtitle="Complete range of pipes and fittings for plumbing and water supply"
      bannerImage="/images/banners/pipesandfitting.jpeg"
    >
      <div className="product-list">
        <h2>Types of Pipes We Supply</h2>
        <ul>
          {pipeTypes.map((pipe, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {pipe}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-list" style={{ marginTop: '50px' }}>
        <h2>Pipe Fittings</h2>
        <ul>
          {fittings.map((fitting, index) => (
            <li key={index}>
              <CheckCircle size={20} />
              {fitting}
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
    </ProductPageLayout>
  );
}
