"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksRouter = (0, express_1.Router)();
tasksRouter.get('/tasks', (req, res) => {
    res.send('Hello beaturiful World!');
});
exports.default = tasksRouter;
