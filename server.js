const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Server listening on port ${port}');
});

app.get('/api/users', (req, res) => {
    res.send('This is a GET request to the /api/users route');
  });

  app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`This is a GET request to the /api/users/${userId} route`);
  });

  app.post('/api/users', (req, res) => {
    const user = req.body;
    res.send(`This is a POST request to the /api/users route with the following user data: ${JSON.stringify(user)}`);
  });