import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {res.send("you got 10 notes")})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});