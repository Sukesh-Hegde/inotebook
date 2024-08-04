import express from 'express'
import { connectUsingMongoose } from './db.js';
import authRouter from './routes/auth.js';
import noteRouter from './routes/notes.js';
import cors from 'cors'

connectUsingMongoose();
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/notes", noteRouter);


app.listen(port, () => {
  console.log(`iNotebook app listening at http://localhost:${port}`);
});




