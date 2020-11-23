import express from 'express';
const app = express();
import bodyParser from 'body-parser';

async function bootstrap() {
  app.use(bodyParser.json());

  app.get('/', async (req, res) => {
    res.status(200).send('Hello, world!');
  });

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

bootstrap().catch((err) => console.error(err));
