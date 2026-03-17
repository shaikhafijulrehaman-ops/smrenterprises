const brands = [
  // Paint Brands
  { name: 'Asian Paints', color: '#e74c3c' },
  { name: 'Berger', color: '#3498db' },
  { name: 'Birla Opus', color: '#8e44ad' },
  { name: 'Nerolac', color: '#9b59b6' },
  { name: 'Dulux', color: '#2ecc71' },
  { name: 'Shalimar', color: '#d35400' },
  { name: 'Indigo', color: '#2c3e50' },
  { name: 'Nippon', color: '#c0392b' },
  { name: 'MRF', color: '#e74c3c' },
  { name: 'Sirca', color: '#16a085' },
  // Cement Brands
  { name: 'ACC', color: '#95a5a6' },
  { name: 'UltraTech', color: '#34495e' },
  { name: 'Ambuja', color: '#27ae60' },
  { name: 'JSW', color: '#2980b9' },
  { name: 'KCP', color: '#7f8c8d' },
  { name: 'Bharathi', color: '#f39c12' },
  { name: 'Nagarjuna', color: '#d4ac0d' },
  { name: 'Vicat', color: '#1a5276' },
  { name: 'Ramco', color: '#117a65' },
  { name: 'Dalmia', color: '#6c3483' },
  { name: 'Shree', color: '#cb4335' },
  { name: 'Penna', color: '#1f618d' },
  { name: 'Maha', color: '#b7950b' },
  { name: 'Raasi', color: '#148f77' },
  { name: 'Anjani', color: '#a04000' },
  { name: 'Sagar', color: '#2e86c1' },
  // Pipes & Fittings Brands
  { name: 'Astral', color: '#1abc9c' },
  { name: 'Ashirvad', color: '#e67e22' },
  { name: 'Finolex', color: '#f1c40f' },
  { name: 'APL Apollo', color: '#3498db' },
  { name: 'Prince', color: '#e91e63' },
  { name: 'Captain', color: '#ff5722' },
  { name: 'Kisan', color: '#4caf50' },
  { name: 'Dutron', color: '#607d8b' },
];

export default function BrandsSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Brands We Supply</h2>
        <p className="section-subtitle">
          Partnering with India&apos;s most trusted construction material brands
        </p>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="brand-item"
              style={{ borderLeft: `4px solid ${brand.color}` }}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
