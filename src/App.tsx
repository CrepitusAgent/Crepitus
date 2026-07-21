function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#0b1020",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <section>
        <p
          style={{
            display: "inline-block",
            padding: "6px 12px",
            border: "1px solid #efb810",
            borderRadius: "999px",
            color: "#efb810",
          }}
        >
          Testnet only · Unaudited
        </p>

        <h1 style={{ fontSize: "48px", marginBottom: "12px" }}>
          Crepitus Protocol
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#aab4d0",
            lineHeight: 1.6,
          }}
        >
          A research foundation for building collateralized synthetic assets.
          Do not use real funds.
        </p>
      </section>
    </main>
  );
}

export default App;
