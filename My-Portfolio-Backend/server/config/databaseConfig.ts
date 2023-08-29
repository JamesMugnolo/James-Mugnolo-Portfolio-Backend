const { Client } = require("pg");

const DBurl = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;
const client = new Client(DBurl);

client.connect((err) => {
  if (err) console.error("connection error", err.stack);
});

module.exports = client;
