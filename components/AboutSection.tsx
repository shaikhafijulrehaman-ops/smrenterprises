import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>About SMR Enterprises</h2>
            <p>
              SMR Enterprises is a leading building materials supplier in Vijayawada,
              dedicated to providing quality construction products for residential and
              commercial projects.
            </p>
            <p>
              We offer a comprehensive range of paints, cement, pipes and sanitary
              products from India&apos;s most trusted brands, ensuring you get the best
              materials for your construction needs.
            </p>
            <p>
              With competitive pricing and reliable doorstep delivery, we make it easy
              for contractors, builders and homeowners to source quality materials
              conveniently.
            </p>
            <div className="about-owner">
              <span>Owner: Mahamad Rafi</span>
            </div>
          </div>
          <div className="about-image">
            <Image
              src="/images/banners/about.jpeg"
              alt="About SMR Enterprises"
              fill
              style={{ objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
