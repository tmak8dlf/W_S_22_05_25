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
  dateStrings: true,
});

const app = express();
const port = 3000;

var corsOptions = {
  origin: "https://cdpn.io",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

app.post("/:user_code/limit", async (req, res) => {
  const { user_code } = req.params;
  const [lastMakeRows] = await pool.query(
    `SELECT * 
    FROM make
    WHERE id = ?
    ORDER BY id DESC
    LIMIT 1`,
    [user_code]
  );
  const newNo = lastMakeRows?.hit + 1 || 1;

  const [rs] = await pool.query(
    `INSERT INTO make
    SET hit = ?`,
    [newNo]
  );
  res.json(rs);
});

app.get("/:user_code/limit", async (req, res) => {
  const { user_code } = req.params;
  const [makeRows] = await pool.query(
    `SELECT * 
    FROM make
    WHERE id = ?
    ORDER BY id DESC`,
    [user_code]
  );
  res.json({
    resultCode: "S-1",
    msg: "성공",
    data: makeRows,
  });
});

/*app.get("/author/limit", async (req, res) => {
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
*/
app.listen(port);
