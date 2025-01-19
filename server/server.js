import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Global variable to store user data in memory
let userData = {};

// Load existing user data from file if available
const loadUserData = async () => {
  try {
    const data = await fs.readFile('./userData.txt', 'utf8');
    userData = JSON.parse(data);
  } catch (err) {
    console.log('No existing user data found, initializing empty data.');
    userData = {};
  }
};

// Call function to initialize userData
loadUserData();

// GET username endpoint
app.get('/getUsername', (req, res) => {
  try {
    if (!userData || !userData.username) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ username: userData.username });
  } catch (err) {
    console.error('Error fetching username:', err);
    res.status(500).send('Error fetching username');
  }
});

// POST to save user data
app.post('/saveUser', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    console.error('Missing user data');
    return res.status(400).send('Missing user data');
  }

  userData = { username, email, password };

  try {
    // Save user data to a text file
    await fs.writeFile('./userData.txt', JSON.stringify(userData, null, 2));
    res.status(200).send('User data saved successfully');
  } catch (err) {
    console.error('Error saving user data:', err);
    res.status(500).send('Error saving user data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
