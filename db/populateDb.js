#! /usr/bin/env node

import dotenv from "dotenv";
import pkg from "pg";
const { Client } = pkg;

dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 username VARCHAR (255),
 message VARCHAR (255),
 added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message)
VALUES
  ('Ivan', 'Hey'),
  ('Bryan', 'Cool App!'),
  ('Jesus', 'This is my first message ever!');
`;

const destroy = `DROP TABLE messages`;

const main = async () => {
  console.log("...seeding");
  const client = new Client({
    connectionString: process.env.LOCAL_DB_URI,
  });
  try {
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch (e) {
    console.log(e);
  }
};

main();
