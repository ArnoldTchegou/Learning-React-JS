import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    alert(`Message sent by ${formData.name}`);
  };

  return (
    <div style={styles.container} className="question">
      <h1 style={styles.header}>Contact Us</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
        </label>
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
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
    backgroundColor: "#e1f5fe",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    fontSize: "2.5em",
    color: "#0277bd",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    width: "100%",
  },
  label: {
    fontSize: "1.2em",
    color: "#01579b",
    marginBottom: "10px",
  },
  input: {
    fontSize: "1em",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #01579b",
  },
  textarea: {
    fontSize: "1em",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #01579b",
    height: "100px",
  },
  button: {
    fontSize: "1.2em",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#0277bd",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Contact;
