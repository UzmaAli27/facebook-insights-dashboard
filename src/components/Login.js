import React from "react";
import { motion } from "framer-motion";

function Login({ handleLogin }) {
  // Style Objects for clean organization
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f0f2f5", // Official Facebook grey-ish background
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      padding: "20px",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "50px 40px",
      borderRadius: "24px",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      border: "1px solid #e5e7eb",
    },
    iconContainer: {
      backgroundColor: "#1877F2",
      color: "white",
      width: "64px",
      height: "64px",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 30px auto",
      boxShadow: "0 10px 20px rgba(24, 119, 242, 0.2)",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "800",
      color: "#1c1e21",
      marginBottom: "12px",
      letterSpacing: "-0.5px",
    },
    subheading: {
      fontSize: "16px",
      color: "#65676b",
      lineHeight: "1.5",
      marginBottom: "32px",
    },
    button: {
      width: "100%",
      backgroundColor: "#1877F2",
      color: "white",
      border: "none",
      padding: "16px",
      borderRadius: "12px",
      fontSize: "17px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
    footer: {
      marginTop: "24px",
      fontSize: "13px",
      color: "#8a8d91",
    },
    badge: {
      display: "inline-block",
      padding: "4px 12px",
      backgroundColor: "#e7f3ff",
      color: "#1877f2",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: "16px",
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.card}
      >
        <div style={styles.badge}>Security Verified</div>

        <div style={styles.iconContainer}>
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>

        <h1 style={styles.heading}>Facebook Insights</h1>
        <p style={styles.subheading}>
          Connect your account to access real-time page performance metrics.
        </p>

        <motion.button
          whileHover={{ backgroundColor: "#166fe5", scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogin}
          style={styles.button}
        >
          Continue with Facebook
        </motion.button>

        <div style={styles.footer}>
          <div style={{ color: "#42b72a", fontWeight: "600", marginBottom: "4px" }}>
            ● Secure OAuth 2.0 Connection
          </div>
          <p>We never share your private data.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;