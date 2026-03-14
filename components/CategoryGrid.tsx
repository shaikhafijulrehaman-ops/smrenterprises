import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    href: '/paints',
    image: '/images/banners/paints.jpeg',
    title: 'Paints',
    description: 'Interior and exterior paints from Asian Paints, Berger, Dulux and Nerolac.',
  },
  {
    href: '/cements',
    image: '/images/banners/cement.jpeg',
    title: 'Cements',
    description: 'OPC and PPC cement from ACC, UltraTech and other trusted brands.',
  },
  {
    href: '/pipes',
    image: '/images/banners/pipesandfitting.jpeg',
    title: 'Pipes & Fittings',
    description: 'Complete range of PVC, CPVC and UPVC pipes from Astral and Finolex.',
  },
  {
    href: '/sanitary',
    image: '/images/banners/sanitaryandbathroom.jpeg',
    title: 'Sanitary Products',
    description: 'Basins, commodes, bathtubs, water heaters and bathroom accessories.',
  },
  {
    href: '/service',
    image: '/images/banners/pestcontrol.jpeg',
    title: 'Pest Control',
    description: 'Professional pest control services for residential and commercial spaces.',
  },
];

export default function CategoryGrid() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Explore our comprehensive range of quality construction materials
        </p>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="category-card">
              <div className="category-image">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="btn btn-outline" style={{ marginTop: '10px' }}>
                  View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
