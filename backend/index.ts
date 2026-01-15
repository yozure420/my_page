import express from "express";
import cors from "cors";
import mysql from 'mysql2/promise';

const app = express();
const PORT = 5000;
const path = require('node:path');
const db = mysql.createPool({
    host: 'mysql_db',
    user: 'user',
    password: 'password',
    database: 'my_page',
    port: 3306
});

app.use(cors());
app.use(express.json());

app.get("/api/works", async (_req, res) => {
    // res.json([{ id: 1, title: "テスト用", tech_stack: "React", description: "DB接続待ち" }]);
    try {
        // const [rows] = await db.query("SELECT * FROM works ORDER BY created_at DESC");
        const [rows] = await db.query("SELECT * FROM works ORDER BY created_at DESC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "DB接続に失敗しました" });
    }
});

// app.get('/work', (_req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'work.html'))
// })


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});