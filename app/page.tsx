export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to 8Air Technology</h1>
        <p className="text-xl text-gray-700">Your trusted partner in air filtration systems.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Our Products</h2>
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-4 text-gray-700">Air Cleaning Units</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              image="/product1.webp"
              title="Healthy Air 500"
              description="Advanced air purification technology for homes and offices."
            />
            <ProductCard
              image="/product2.webp"
              title="Healthy Air 800"
              description="High-efficiency air purifier for industrial use."
            />
            <ProductCard
              image="/product3.webp"
              title="Healthy Air 55 Wall Mount"
              description="Compact and portable air cleaner for travel and small spaces."
            />
            <ProductCard
              image="/product2.webp"
              title="Automotive Air Cleansing Unit"
              description="Innovative air cleaning for automotive use."
            />
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-gray-700">Air Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              image="/product3.webp"
              title="HA800 Filter"
              description="High-performance filter for industrial air purification."
            />
            <ProductCard
              image="/product3.webp"
              title="HA500 Filters"
              description="Advanced filters for home and office air purifiers."
            />
            <ProductCard
              image="/product3.webp"
              title="HA30 Triple Layered Filter"
              description="Triple layered filter for enhanced air cleaning."
            />
            <ProductCard
              image="/product3.webp"
              title="Pollution Eraser AC Series Filter Plate"
              description="Efficient filter plates for air conditioning systems."
            />
            <ProductCard
              image="/product3.webp"
              title="Pollution Eraser Auto Series Filter Plate"
              description="Auto series filter plates for vehicle air cleaning."
            />
            <ProductCard
              image="/product3.webp"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our products."
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Healthy Air, Wherever You Go</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              At 8Air Technology, we understand that clean air is essential no matter where you are. Our range of portable air purifiers and automotive air cleaning units ensure that you can enjoy fresh and healthy air whether you are at home, in the office, or on the go. Our products are designed to be highly efficient, easy to use, and reliable, making clean air accessible to everyone.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Whether you need an air purifier for a large industrial space or a compact unit for personal use, we have the right solution for you. Explore our range of products and experience the difference of breathing clean, healthy air with 8Air Technology.
            </p>
          </div>
          <img src="/home.webp" alt="Healthy Air" className="w-full md:w-1/2 h-auto rounded shadow-lg" />
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-4">If you have any questions or need further information, please feel free to contact us:</p>
        <p className="text-xl text-gray-800 font-medium">Email: contact@8airtech.com</p>
        <p className="text-xl text-gray-800 font-medium">Phone: +1 234 567 890</p>
      </section>
    </div>
  );
}

function ProductCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <div className="border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
