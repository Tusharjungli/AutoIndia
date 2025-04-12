export default function Hero() {
    return (
      <section className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Drive with Confidence</h1>
          <p className="text-xl mb-6">Premium Auto Spare Parts for Every Vehicle</p>
          <a
            href="/products"
            className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90"
          >
            Shop Now
          </a>
        </div>
      </section>
    );
  }