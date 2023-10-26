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
  //   ssl: true,
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
    `select e.id as entry_id, e.title, p.person_full_name as recommended_by, med.medium_type, moo.mood_type from entries e 
      inner join media med on (e.medium_id = med.id)
      inner join moods_entries me on (e.id = me.entry_id)
      inner join moods moo on (moo.id = me.mood_id)
      inner join people p on (p.id = e.person_id);`
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

// This endpoint is used to get all the moods based on entry_id or titles

app.get("/moods/:entryId", (req, res) => {
  const { entryId } = req.params;

  db.query(
    `select e.id as entry_id, e.title, moo.mood_type from entries e 
        inner join moods_entries me on (e.id = me.entry_id)
        inner join moods moo on (moo.id = me.mood_id) where entry_id = $1;`,
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
