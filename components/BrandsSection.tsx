const brands = [
  { name: 'Asian Paints', color: '#e74c3c' },
  { name: 'Berger', color: '#3498db' },
  { name: 'Dulux', color: '#2ecc71' },
  { name: 'Nerolac', color: '#9b59b6' },
  { name: 'ACC Cement', color: '#95a5a6' },
  { name: 'UltraTech', color: '#34495e' },
  { name: 'Astral Pipes', color: '#1abc9c' },
  { name: 'Finolex', color: '#e67e22' },
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
