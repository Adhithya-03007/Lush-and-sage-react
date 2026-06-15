import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { Link } from "react-router-dom";
import p1 from "../assets/product1.png";
import p2 from "../assets/product2.png";
import p3 from "../assets/product3.png";
import p4 from "../assets/product4.png";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase
      .from("products")
      .select("*");

    setProducts(data || []);
  }

  const images = [p1, p2, p3, p4];

  return (
    <section className="section products-section">
      <h2>Featured Products</h2>

      <div className="divider"></div>

      <div className="card-container">
        {products.map((product, index) => (
  <Link
    key={product.id}
    to={`/product/${product.id}`}
    style={{
      textDecoration: "none",
      color: "inherit"
    }}
  >
    <div className="product-card">
      <img
        src={images[index]}
        alt={product.name}
        className="product-image"
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <p>{product.description}</p>
    </div>
  </Link>
))}
      </div>
    </section>
  );
}   
export default Products;