import express from 'express';
import indexRouter from '@routes/index.route';

const app = express();

app.use('/', indexRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
