import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
    res.status(200).json({message: "You got the posts"});
});

app.post('/api/notes', (req, res) => {
    res.status(201).json({message: "Post created successfully"});
})

app. put('/api/notes/:id', (req, res) => {
    res.status(200).json({message: "Post updated successfully"});
})

app. delete('/api/notes/:id', (req, res) => {
    res.status(200).json({message: "Post deleted successfully"});
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});