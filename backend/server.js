require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// credentials for database
const db = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: true,
});

// Connecting to database
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database !");
});

app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

// This endpoint is used to get all the entries

app.get("/entries", (req, res) => {
  db.query(
    `SELECT
      e.id AS entry_id,
      e.title,
      m.medium_type,
      recommendations.recommended_by,
      moods.mood_types
    FROM entries e
    INNER JOIN media m ON (e.medium_id = m.id)
    LEFT JOIN (
        SELECT
          entry_id,
          ARRAY_AGG(p.person_full_name) AS recommended_by
        FROM people_entries pe
        JOIN people p ON (pe.person_id = p.id)
        GROUP BY entry_id
    ) AS recommendations ON e.id = recommendations.entry_id
    LEFT JOIN (
        SELECT
            entry_id,
            ARRAY_AGG(moo.mood_type) AS mood_types
        FROM moods_entries me
        JOIN moods moo ON (me.mood_id = moo.id)
        GROUP BY entry_id
    ) AS moods ON e.id = moods.entry_id;`
  )

    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to get all the people who made recommendations

app.get("/recommenders", (req, res) => {
  db.query(`SELECT distinct person_id FROM entries;`)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to get all the moods

app.get("/moods", (req, res) => {
  db.query(`SELECT * FROM moods_entries;`)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to get all the moods based on entry_id or title/medium combination

app.get("/moods/:entryId", (req, res) => {
  const { entryId } = req.params;

  db.query(
    `SELECT 
      e.id as entry_id, 
      e.title, 
      moo.mood_type 
    FROM 
    entries e
      INNER JOIN moods_entries me on (e.id = me.entry_id)
      INNER JOIN moods moo on (moo.id = me.mood_id)
      where me.entry_id = $1;`,
    [entryId]
  )
    .then((result) => {
      const moodsObject = {
        entry_id: result.rows[0].entry_id,
        title: result.rows[0].title,
        mood_types: result.rows.map((row) => row.mood_type),
      };
      res.json(moodsObject);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

// This endpoint is used to get all the media

app.get("/media", (req, res) => {
  db.query(`SELECT * FROM media;`)
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).send("Database Error");
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
