import { ReactNode } from 'react';
import { Phone } from 'lucide-react';

interface ProductPageLayoutProps {
  title: string;
  subtitle: string;
  bannerImage: string;
  children: ReactNode;
}

export default function ProductPageLayout({
  title,
  subtitle,
  bannerImage,
  children,
}: ProductPageLayoutProps) {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>

      <div className="product-section-card">
        {children}
      </div>

      <div className="product-section-card" style={{ paddingBottom: '40px' }}>
        <div className="product-list" style={{ textAlign: 'center' }}>
          <h2>Need {title}?</h2>
          <p style={{ color: '#6b7080', marginBottom: '24px' }}>
            Contact us for the best prices and doorstep delivery
          </p>
          <div className="cta-buttons">
            <a href="tel:9493700577" className="btn btn-primary">
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://wa.me/919493700577?text=Hello%20SMR%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
