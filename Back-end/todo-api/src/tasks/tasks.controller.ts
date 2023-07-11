import { Request, Response } from 'express';
import { AppDataSource } from '../../app';
import { Task } from './tasks.entity';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { validationResult } from 'express-validator';
import { UpdateResult } from 'typeorm';

class TasksController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      let allTasks: Task[];

      allTasks = await AppDataSource.getRepository(Task).find({
        order: {
          date: 'ASC',
        },
      });

      allTasks = instanceToPlain(allTasks) as Task[];

      return res.status(200).json(allTasks);
    } catch (error) {
      return res.status(200).json({
        error: 'Something went wrong!',
      });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
      });
    }

    const newTask = new Task();
    const { title, date, description, priority, status } = req.body;

    newTask.title = title;
    newTask.date = date;
    newTask.description = description;
    newTask.priority = priority;
    newTask.status = status;

    let createdTask: Task;

    try {
      createdTask = await AppDataSource.getRepository(Task).save(newTask);
      createdTask = instanceToPlain(createdTask) as Task;

      return res.status(201).json(createdTask);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
      });
    }

    let task: Task | null;

    try {
      task = await AppDataSource.getRepository(Task).findOne({
        where: { id: req.body.id },
      });

      if (!task)
        return res.status(404).json({
          error: 'The task with given ID does not exist!',
        });

      let upadtedTask: UpdateResult;

      upadtedTask = await AppDataSource.getRepository(Task).update(
        req.body.id,
        plainToInstance(Task, { status: req.body.status }),
      );

      upadtedTask = instanceToPlain(upadtedTask) as UpdateResult;

      return res.status(200).json(upadtedTask);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export const tasksController = new TasksController();
