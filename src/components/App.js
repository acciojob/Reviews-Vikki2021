import React from "react";
import Review from "./Review";

function App() {
  // inline styles
  const styles = {
    main: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f1f5f8",
      padding: "2rem",
    },
    container: {
      background: "#fff",
      borderRadius: "0.5rem",
      padding: "2rem",
      maxWidth: "400px",
      textAlign: "center",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
    },
    heading: {
      marginBottom: "1.5rem",
      fontSize: "2rem",
      color: "#102a42",
    },
  };

  return (
    <main style={styles.main}>
      <section className="container" style={styles.container}>
        <h2 id="review-heading" style={styles.heading}>
          Our Reviews
        </h2>
        <Review />
      </section>
    </main>
  );
}

export default App;
