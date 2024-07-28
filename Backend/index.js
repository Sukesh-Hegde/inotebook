import express from 'express'
import { connectUsingMongoose } from './db.js';
import authRouter from './routes/auth.js';
import noteRouter from './routes/notes.js';

connectUsingMongoose();
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
