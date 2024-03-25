require('dotenv').config();

const DB_URI2 = process.env.DB_URI2;
const DB_URI =process.env.DB_URI;

module.exports = {
    DB_URI,
    DB_URI2
}