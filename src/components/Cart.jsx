import { useEffect, useState } from "react";
import { supabase } from "./supabase";

import p1 from "../assets/product1.png";
import p2 from "../assets/product2.png";
import p3 from "../assets/product3.png";
import p4 from "../assets/product4.png";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const imageMap = {
    "product1.png": p1,
    "product2.png": p2,
    "product3.png": p3,
    "product4.png": p4,
  };

  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    const { data } = await supabase
      .from("cart")
      .select("*");

    setCartItems(data || []);
  }

  async function increaseQuantity(item) {
    await supabase
      .from("cart")
      .update({
        quantity: item.quantity + 1,
      })
      .eq("id", item.id);

    fetchCart();
  }

  async function decreaseQuantity(item) {
    if (item.quantity === 1) return;

    await supabase
      .from("cart")
      .update({
        quantity: item.quantity - 1,
      })
      .eq("id", item.id);

    fetchCart();
  }

  async function deleteItem(id) {
    await supabase
      .from("cart")
      .delete()
      .eq("id", id);

    fetchCart();
  }

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#4f7c5a",
          marginBottom: "40px",
        }}
      >
        My Cart 🛒
      </h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={imageMap[item.image]}
            alt={item.name}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            <h3
              style={{
                color: "#4f7c5a",
                marginTop: "10px",
              }}
            >
              ₹{item.price}
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button onClick={() => decreaseQuantity(item)}>
              −
            </button>

            <h3>{item.quantity}</h3>

            <button onClick={() => increaseQuantity(item)}>
              +
            </button>
          </div>

          <button
            onClick={() => deleteItem(item.id)}
            style={{
              background: "#e74c3c",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2f4f2f",
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Grand Total: ₹{grandTotal}
        </h2>

        <button
          style={{
            background: "#4f7c5a",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;