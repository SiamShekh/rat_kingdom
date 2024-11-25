import express from "express";
import cors from "cors";
import MainRoutes from "./routes/main.routes";
const app = express();
app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.use('/api/v1', MainRoutes);

app.get('/', async (req, res) => {
    res.send({
        msg: 'Hello World',
    })
});

export default app;