import heroImage from "../assets/hero-fashion.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="badge">Nature Inspired Fashion</span>

        <h1>
          Elegance In
          <br />
          Every Shade
        </h1>

        <p>
          Discover timeless fashion inspired by calm,
          natural beauty and sustainable style.
        </p>

        <button>Explore Collection</button>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Fashion Model" />
      </div>
    </section>
  );
}

export default Hero;