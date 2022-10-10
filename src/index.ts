import express, { Request } from 'express'
import cors from "cors";
import router  from './routes';
import * as dotenv from "dotenv";
dotenv.config({path: __dirname + '/.env'});

const app = express()

app.get('/', (req, res) => {
    res.send("Hello worfe")
})

app.use(router);
app.use(cors<Request>);
app.use(express.json());
app.listen(process.env.SERVERPORT || 8080);
console.log('> Server is on');