import { Percent, Truck, Building2 } from 'lucide-react';

const highlights = [
  {
    icon: Percent,
    title: '10% Discount on Pipes',
    description: 'Get 10% off on all pipes and fittings. Special pricing available only on pipe products.',
  },
  {
    icon: Truck,
    title: 'Free Door Delivery',
    description: 'Convenient doorstep delivery available for all your construction material needs.',
  },
  {
    icon: Building2,
    title: 'Wide Range of Brands',
    description: 'Access to all major construction material brands under one roof.',
  },
];

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-icon">
                <item.icon size={36} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
