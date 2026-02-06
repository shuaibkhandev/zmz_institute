import React from 'react'

const ComingSoon = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "#fff",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          padding: "40px 30px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo (optional) */}
        {/* <Image src="/logo.png" alt="ZMZ Institute" width={100} height={100} /> */}

        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          ZMZ Institute
        </h1>

        <p style={{ fontSize: "1.1rem", opacity: 0.85 }}>
          Our website is currently under development.
        </p>

        <p style={{ marginTop: "10px", opacity: 0.7 }}>
          We’re working hard to bring you something amazing 🚀
        </p>

        <div
          style={{
            marginTop: "30px",
            padding: "12px 20px",
            borderRadius: "999px",
            background: "#22c55e",
            display: "inline-block",
            color: "#020617",
            fontWeight: "600",
          }}
        >
          Status: Pending Launch
        </div>

        <footer
          style={{
            marginTop: "40px",
            fontSize: "0.85rem",
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} ZMZ Institute. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default ComingSoon
