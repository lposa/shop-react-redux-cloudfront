import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TEST_ACCOUNT_DATA = {
  username: "lposa",
  password: "test1234",
};

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      TEST_ACCOUNT_DATA.username !== username ||
      TEST_ACCOUNT_DATA.password !== password
    ) {
      setShowError(true);
    } else {
      setShowError(false);
      localStorage.setItem(
        "authorization_token",
        window.btoa(`${username}:${password}`)
      );
      alert("Login successful!");
      navigate("/admin/products");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: 4,
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", marginBottom: 2, fontWeight: "bold" }}
        >
          Welcome to Leo's Shop
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: 3, color: "#666" }}
        >
          Please login to continue
        </Typography>

        {showError && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            Wrong username or password
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};
