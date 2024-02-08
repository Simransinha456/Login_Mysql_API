const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("There is an error");
        } else if (data.length > 0) {
            return res.json("Login successful");
        } else {
            return res.json("Sorry No record is there");
        }
    })
})
app.listen(8000, () => {
    console.log("Server started");
}) 