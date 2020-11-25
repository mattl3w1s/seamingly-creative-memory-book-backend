import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';

async function bootstrap() {
  app.use(bodyParser.json());
  app.use(cors());

  app.post('/api', async (req, res) => {
    console.log(req.body);
    res.status(200).send('Hello, world!');
  });

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

bootstrap().catch((err) => console.error(err));
