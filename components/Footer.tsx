import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>SMR Enterprises</h3>
            <p>
              Your trusted building materials supplier in Vijayawada, providing quality
              paints, cement, pipes and sanitary products for residential and commercial
              construction projects.
            </p>
            <a
              href="https://wa.me/919493700577?text=Hello%20SMR%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              style={{ marginTop: '10px' }}
            >
              WhatsApp Enquiry
            </a>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/service">Services</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><Link href="/paints">Paints</Link></li>
              <li><Link href="/cements">Cements</Link></li>
              <li><Link href="/pipes">Pipes & Fittings</Link></li>
              <li><Link href="/sanitary">Sanitary Products</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} />
                <a href="tel:9493700577">9493700577</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} />
                <a href="mailto:smrenterprises2615@gmail.com">smrenterprises2615@gmail.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>Patamata, Vijayawada, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SMR Enterprises. All rights reserved.</p>
          <p style={{ marginTop: '8px' }}>
            Built by <a href="https://uxitech.in" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7', textDecoration: 'none' }}>UXITECH</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
