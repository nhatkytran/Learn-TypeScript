import express, { Express } from 'express';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
import { Task } from './src/tasks/tasks.entity';
import tasksRouter from './src/tasks/tasks.router';

const app: Express = express();

dotenv.config({ path: path.join(__dirname, '.env') });

const { PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;

app.use(morgan('dev'));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(cors());

app.use('/', tasksRouter);

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    const port = Number(PORT) || 3111;
    app.listen(port, '127.0.0.1', () => {
      console.log(`App running on port ${port}...`);
    });
  })
  .catch(error => {
    console.error('Something went wrong!');
    console.error(error);
  });
