import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabase";

import p1 from "../assets/product1.png";
import p2 from "../assets/product2.png";
import p3 from "../assets/product3.png";
import p4 from "../assets/product4.png";

const imageMap = {
  "product1.png": p1,
  "product2.png": p2,
  "product3.png": p3,
  "product4.png": p4,
};

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
    <img src={imageMap[product.image]}
    alt={product.name}
    style={{
      width: "300px",
      borderRadius: "20px",
      marginBottom: "20px",
    }}
  />
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