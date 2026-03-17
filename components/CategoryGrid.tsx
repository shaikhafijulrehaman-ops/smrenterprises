import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    href: '/paints',
    image: '/images/banners/paintworks1.jpg',
    title: 'Paint Works',
  },
  {
    href: '/cements',
    image: '/images/banners/cementworks.webp',
    title: 'Cement Works',
  },
  {
    href: '/pipes',
    image: '/images/banners/pipeworks1.jpg',
    title: 'Pipe Works',
  },
  {
    href: '/sanitary',
    image: '/images/banners/sanitoryworks1.jpg',
    title: 'Sanitary Works',
  },
  {
    href: '/service',
    image: '/images/banners/pestcontrol.jpg',
    title: 'Pest Control',
  },
];

export default function CategoryGrid() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Explore our comprehensive range of quality construction services
        </p>
        <div className="cat-grid">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="cat-block">
              <div className="cat-block-img">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="cat-block-overlay" />
              <div className="cat-block-content">
                <h3 className="cat-block-title">{category.title}</h3>
                <span className="cat-block-btn">View Works</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
