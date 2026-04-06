import { Metadata } from 'next';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - SMR Enterprises',
  description: 'Learn about SMR Enterprises, a trusted building materials supplier in Vijayawada providing paints, cement, pipes and sanitary products.',
};

const values = [
  'Quality products from trusted brands',
  'Competitive and transparent pricing',
  'Reliable doorstep delivery',
  'Personalized customer service',
  'Wide range of construction materials',
  'Years of industry experience',
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <h1>About Us</h1>
          <p>Your trusted building materials partner</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>About SMR Enterprises</h2>
              <p>
                SMR Enterprises is a leading building materials supplier based in
                Vijayawada, Andhra Pradesh. We are dedicated to providing quality
                construction products for residential and commercial projects.
              </p>
              <p>
                Our comprehensive product range includes paints from top brands like
                Asian Paints, Berger, Dulux and Nerolac; cement from ACC, UltraTech
                and other trusted manufacturers; pipes and fittings from Astral and
                Finolex; and a wide selection of sanitary products and bathroom
                accessories.
              </p>
              <p>
                We pride ourselves on offering competitive prices - typically 10%
                lower than market rates - without compromising on quality. Our
                commitment to customer satisfaction is reflected in our reliable
                doorstep delivery service and personalized attention to every order.
              </p>
              <div className="about-owner">
                <span>Owner: Mahamad Rafi</span>
              </div>
            </div>
            <div className="about-image">
              <img src="/images/banners/logo.jpeg" alt="SMR Enterprises Logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            What makes us the preferred choice for construction materials
          </p>
          <div className="product-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ul>
              {values.map((value, index) => (
                <li key={index}>
                  <CheckCircle size={20} />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={28} />
              </div>
              <h3>Phone</h3>
              <p>
                <a href="tel:9390370577">9390370577</a>
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={28} />
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:smrenterprises2615@gmail.com">smrenterprises2615@gmail.com</a>
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={28} />
              </div>
              <h3>Address</h3>
              <p>Patamata, Vijayawada<br />Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for the best prices on construction materials</p>
          <div className="cta-buttons">
            <a href="tel:9390370577" className="btn btn-white">
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://wa.me/919390370577?text=Hello%20SMR%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
