const express = require('express');
// const cors = require('cors');
const app = express();

// app.use(cors());
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.listen(4000, () => console.log('API server: http://localhost:4000'));