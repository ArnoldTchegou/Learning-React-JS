import React from "react";

const FAQ = () => {
  return (
    <div style={styles.container} className="faq">
      <h1 style={styles.header}>Frequently Asked Questions</h1>
      <div style={styles.question}>
        <h3 style={styles.questionTitle}>Q: What is this website about?</h3>
        <p style={styles.answer}>
          A: This website is dedicated to providing the best service possible
          and ensuring customer satisfaction.
        </p>
      </div>
      <div style={styles.question}>
        <h3 style={styles.questionTitle}>Q: How can I contact you?</h3>
        <p style={styles.answer}>
          A: You can contact us through the Contact page linked in the
          navigation bar.
        </p>
      </div>
      <div style={styles.question}>
        <h3 style={styles.questionTitle}>Q: Where are you located?</h3>
        <p style={styles.answer}>
          A: We are located in the heart of the city, with easy access to all
          major transport links.
        </p>
      </div>
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
    backgroundColor: "#fffde7",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "2.5em",
    color: "#f57f17",
    marginBottom: "20px",
  },
  question: {
    maxWidth: "600px",
    marginBottom: "20px",
  },
  questionTitle: {
    fontSize: "1.5em",
    color: "#e65100",
  },
  answer: {
    fontSize: "1.2em",
    color: "#4e342e",
  },
};

export default FAQ;
