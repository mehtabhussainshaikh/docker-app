const express = require('express');
const app = express();
const port = 4000;

app.get('/', (_, res) => {
  res.json({
    message : "Hello from docker app",
    timestamp : new Date().toISOString(),
    status : "Running successfully"
  })
}); 

app.get('/health', (_, res) => {
  res.json({
    status : "OK",
    timestamp : new Date().toISOString()
  })
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});