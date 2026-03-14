import { Package, BadgePercent, Shield, Truck } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Wide Product Range',
    description: 'Comprehensive selection of paints, cement, pipes and sanitary products.',
  },
  {
    icon: BadgePercent,
    title: 'Competitive Pricing',
    description: '10% lower prices compared to market rates with no compromise on quality.',
  },
  {
    icon: Shield,
    title: 'Trusted Supplier',
    description: 'Reliable partner for construction projects in Vijayawada and surrounding areas.',
  },
  {
    icon: Truck,
    title: 'Door Delivery',
    description: 'Convenient doorstep delivery service available for all orders.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Your trusted partner for quality construction materials
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
