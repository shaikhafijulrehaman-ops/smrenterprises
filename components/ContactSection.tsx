import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Get in touch for enquiries and orders
        </p>
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
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a
            href="https://wa.me/919390370577?text=Hello%20SMR%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
            style={{ padding: '18px 40px', fontSize: '1.1rem' }}
          >
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
