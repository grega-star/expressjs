const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const challenge = req.query['hub.challenge'];
  if (challenge) {
    res.send(challenge);
  } else {
    res.send('OK');
  }
});

app.post('/', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.send('OK');
});

app.listen(process.env.PORT || 3000);
