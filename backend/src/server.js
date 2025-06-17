import express from 'express';
import notesRoutes from './routes/notesRoutes.js';

const app = express();

app.use('/api/notes', notesRoutes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

//mongodb+srv://mytesting2233:V7k8HPoVIlOD0ne9@cluster0.r4davnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0