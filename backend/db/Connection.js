
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'Vehicle rental system',
  password: 'Bigyan',
});

// Optional: just to verify connection once on startup
pool.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

module.exports = pool;
