import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabase";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    setProduct(data);
  }

  if (!product) return <h2>Loading...</h2>;

 return (
  <div
    style={{
      padding: "60px",
      minHeight: "100vh",
      background: "#f5f7f2",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        color: "#2f4f2f",
        fontSize: "48px",
        marginBottom: "20px",
      }}
    >
      {product.name}
    </h1>

    <h2
      style={{
        color: "#7a9b7a",
        marginBottom: "20px",
      }}
    >
      ₹{product.price}
    </h2>

    <p
      style={{
        fontSize: "20px",
        color: "#444",
      }}
    >
      {product.description}
    </p>
  </div>
);}
export default ProductDetails;