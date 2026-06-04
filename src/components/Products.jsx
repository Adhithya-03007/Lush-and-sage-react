import p1 from "../assets/product1.png";
import p2 from "../assets/product2.png";
import p3 from "../assets/product3.png";
import p4 from "../assets/product4.png";

function Products() {
  return (
    <section className="section products-section">
      <h2>Featured Products</h2>

      <div className="divider"></div>

      <div className="card-container">
        <div className="product-card">
          <img src={p1} alt="Linen Shirt" className="product-image" />
          <h3>Linen Shirt</h3>
          <p>₹1499</p>
        </div>

        <div className="product-card">
          <img src={p2} alt="Sage Dress" className="product-image" />
          <h3>Sage Dress</h3>
          <p>₹2199</p>
        </div>

        <div className="product-card">
          <img src={p3} alt="Classic Jacket" className="product-image" />
          <h3>Classic Jacket</h3>
          <p>₹2699</p>
        </div>

        <div className="product-card">
          <img src={p4} alt="Minimal Co-ord" className="product-image" />
          <h3>Minimal Co-ord</h3>
          <p>₹1899</p>
        </div>
      </div>
    </section>
  );
}

export default Products;