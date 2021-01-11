"use strict";

console.log("db/config");

if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "gzagewlc_db",
    password: "gia1WxPNb?Nm",
    database: "gzagewlc_users",
    host: "127.0.0.1",
    dialect: "mariadb"
}
}
