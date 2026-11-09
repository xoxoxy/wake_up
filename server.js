const express = require('express');
const app = express();

app.get('/api/wake', (req, res) => {
  res.send('早安小风');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});