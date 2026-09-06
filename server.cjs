const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Railway MySQL connection
const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
});

db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err.message);
        return;
    }

    console.log("MySQL connected successfully!");
});

// Test route
app.get("/", (req, res) => {
    res.send("Cebuana Educational Loan API is running!");
});

// Submit loan application
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

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});