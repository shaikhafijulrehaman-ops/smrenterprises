import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    href: '/paints',
    image: '/images/banners/paints.jpeg',
    title: 'Paint Supply',
  },
  {
    href: '/cements',
    image: '/images/banners/cement.jpeg',
    title: 'Cement Supply',
  },
  {
    href: '/pipes',
    image: '/images/banners/pipesandfitting.jpeg',
    title: 'Pipe Supply',
  },
  {
    href: '/sanitary',
    image: '/images/banners/sanitaryandbathroom.jpeg',
    title: 'Sanitary Supply',
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
                <span className="cat-block-btn">View Supply</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
