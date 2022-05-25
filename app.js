import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const pool = mysql.createPool({
  host: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "W_S",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
const port = 3000;

var corsOptions = {
  origin: "http://localhost:3000/author/limit",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/author/limit", async (req, res) => {
  const [[rows]] = await pool.query(`SELECT *
  FROM make
  ORDER BY RAND()
  LIMIT 1;`);
  res.json(rows);
});

app.get("/author", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM make");

  res.json(rows);
});

app.listen(port);
