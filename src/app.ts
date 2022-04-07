import express from 'express';
import router from "./routes/router";
import dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/crypt', router);

app.listen(PORT, () => console.log('Server started on port ' +PORT));


