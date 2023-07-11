'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const path_1 = __importDefault(require('path'));
const morgan_1 = __importDefault(require('morgan'));
const dotenv_1 = __importDefault(require('dotenv'));
const typeorm_1 = require('typeorm');
const cors_1 = __importDefault(require('cors'));
const tasks_entity_1 = require('./src/tasks/tasks.entity');
const tasks_router_1 = __importDefault(require('./src/tasks/tasks.router'));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', '.env') });
const { PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json({ limit: '10kb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10kb' }));
app.use((0, cors_1.default)());
app.use('/', tasks_router_1.default);
const AppDataSource = new typeorm_1.DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  entities: [tasks_entity_1.Task],
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
