import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our website. We are dedicated to providing the best service
        possible. Our team works tirelessly to ensure customer satisfaction and
        deliver outstanding results.
      </p>
      <p style={styles.paragraph}>
        Our mission is to make a difference through our commitment to quality
        and excellence. We believe in the power of innovation and strive to stay
        at the forefront of our industry.
      </p>
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
    backgroundColor: "#e0f7fa",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "2.5em",
    color: "#00796b",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    color: "#004d40",
    maxWidth: "600px",
    textAlign: "center",
    lineHeight: "1.5",
    marginBottom: "15px",
  },
};

export default About;
