import express from "express";
import cors from "cors";
import mysql from 'mysql2/promise';

const app = express();
const PORT = 5000;

const db = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'my_page',
    port: 3306
});

app.use(cors());
app.use(express.json());

// --- APIだけを残す！ ---

app.get("/api/hello", (_req, res) => {
    res.send({ message: "Hello from Bun + Express!" });
});

// これが本命：作品データをDBから取ってくるAPI
app.get("/api/works", async (_req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM works ORDER BY created_at DESC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "DB接続に失敗しました" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});