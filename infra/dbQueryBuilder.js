const { HOST_DB, PORT_DB, USER_DB, PASS_DB, DATABASE } =
  require("dotenv").config().parsed;

const knex = require("knex");

module.exports = knex({
  client: "pg",
  connection: {
    host: HOST_DB,
    port: PORT_DB,
    user: USER_DB,
    password: PASS_DB,
    database: DATABASE,
  },
});
