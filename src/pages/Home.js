import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to My Home Page</h1>
      <p style={styles.paragraph}>This is a simple React home component.</p>
      <button onClick={() => navigate("order-summary")}>Place Order</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "2.5em",
    color: "#333",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    color: "#666",
  },
};

export default Home;
