require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// ===============================
// MYSQL CONNECTION
// ===============================
const db = mysql.createConnection(
  process.env.MYSQL_PUBLIC_URL
);

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }

  console.log("MySQL connected successfully!");
});

// ===============================
// API TEST
// ===============================

app.get("/api/test", (req, res) => {
  res.json({
    message: "Cebuana API is working!"
  });
});

// ===============================
// SUBMIT LOAN APPLICATION
// ===============================

app.post("/api/submissions", (req, res) => {
  const { name, phone, address, consent } = req.body;

  if (!name || !phone || !address || consent !== true) {
    return res.status(400).json({
      message: "Name, phone number, address, and consent are required."
    });
  }

  const sql = `
    INSERT INTO cebuana_submissions
    (name, phone, address, consent)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, phone, address, consent],
    (err, result) => {
      if (err) {
        console.error("Database error:", err.message);

        return res.status(500).json({
          message: "Database error."
        });
      }

      console.log("Application saved. ID:", result.insertId);

      res.json({
        message: "Please wait the application is initializing",
        id: result.insertId
      });
    }
  );
});

// ===============================
// SERVE REACT FRONTEND
// ===============================

const frontendPath = path.join(__dirname, "dist");

app.use(express.static(frontendPath));

// For React routes, return index.html
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.join(frontendPath, "index.html"));
  } else {
    next();
  }
});

// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});