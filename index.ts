import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/DBConnection";
import userRouter from "./routes/usuarios";
dotenv.config();

const app: Application = express();
const port = process.env.PORT || '7000';

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Connection DB
connectDB();

//Routes
app.use('/api/usuarios', userRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto: ${port}`);
});
