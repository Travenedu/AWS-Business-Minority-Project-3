const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data (replace with your actual data)
const businesses = [
  { id: 1, name: 'Business 1' },
  { id: 2, name: 'Business 2' },
  { id: 3, name: 'Business 3' },
  // Add more businesses as needed
];

// Endpoint to get all businesses
app.get('/api/businesses', (req, res) => {
  res.json(businesses);
});

// Endpoint to search for businesses by name
app.get('/api/businesses/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = businesses.filter(business =>
    business.name.toLowerCase().includes(query)
  );
  res.json(results);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
