import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { Link } from "react-router-dom";

import p1 from "../assets/product1.png";
import p2 from "../assets/product2.png";
import p3 from "../assets/product3.png";
import p4 from "../assets/product4.png";

function Products() {
  const [products, setProducts] = useState([]);

  const imageMap = {
    "product1.png": p1,
    "product2.png": p2,
    "product3.png": p3,
    "product4.png": p4,
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase
      .from("products")
      .select("*");

    setProducts(data || []);
  }

  async function addToCart(product) {

  const { data: existing } = await supabase
    .from("cart")
    .select("*")
    .eq("product_id", product.id)
    .maybeSingle();

  if (existing) {

    await supabase
      .from("cart")
      .update({
        quantity: existing.quantity + 1
      })
      .eq("id", existing.id);

  } else {

    await supabase
      .from("cart")
      .insert([
        {
          product_id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          quantity: 1
        }
      ]);
  }

  alert("Added To Cart");
}

  return (
    <section className="section products-section">
      <h2>Featured Products</h2>

      <div className="divider"></div>

      <div className="card-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={imageMap[product.image]}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <p>{product.description}</p>

            <div className="product-buttons">
              <Link to={`/product/${product.id}`}>
                <button className="details-btn">
                  View Details
                </button>
              </Link>

              <button
                className="cart-btn"
                onClick={() => addToCart(product)}
              >
                🛒 Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;