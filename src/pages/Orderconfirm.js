import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Your order has been confirmed</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default OrderSummary;
