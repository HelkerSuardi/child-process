const express = require('express');
const { fork } = require('child_process');

const app = express();

const { blockingFunction } = require('./blocking-function');

app.get('/blocking-route/:totalLoops', async (req, res) => {
  const { totalLoops } = req.params;
  blockingFunction(totalLoops);
  res.status(200).send('done');
});

app.get('/no-blocking-route/:totalLoops', (req, res) => {
  const { totalLoops } = req.params;
  const child = fork('blocking-function.js');
  child.send(totalLoops);
  child.on('exit', (msg) => {
    res.status(200).send('done');
  });
});

app.listen(3333, () => { console.log('Server running on 3333')});
