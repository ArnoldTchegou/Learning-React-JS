import React from "react";
import { Link } from "react-router-dom";

const PagenotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link to="/" style={styles.homeLink}>
        HomePage
      </Link>
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
    backgroundColor: "#ffebee",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "2.5em",
    color: "#d32f2f",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    color: "#757575",
    marginBottom: "20px",
    textAlign: "center",
    maxWidth: "600px",
  },
  homeLink: {
    fontSize: "1.2em",
    color: "#ffffff",
    backgroundColor: "#d32f2f",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default PagenotFound;
