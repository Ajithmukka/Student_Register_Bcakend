const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: "postgres",          
  host: "localhost",
  database: "student_db",    
  password: "postgres", 
  port: 5432
});

module.exports = pool;

