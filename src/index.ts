import express, { Request, Response, NextFunction } from 'express'
import cors from "cors";
import router  from './routes';

const app = express();

var allowCrossDomain = function(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(express.json());
app.use(allowCrossDomain)
app.use(router);
app.listen(8080);
console.log('> Server is on');