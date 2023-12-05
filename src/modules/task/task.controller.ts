import { validation } from "../../common/validData";
import { TaskService } from "./task.service";
import { Request, Response } from "express";
import to from "await-to-js";

export class TaskController {

  public taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  create = async (req: Request, res: Response, next: any) => {

    const errValidation = validation(req);

    if (errValidation) {
      return res.status(400).send({ errValidation });
    }

    const [error, user] = await to(this.taskService.create(req.body));

    if (error) {
      return res.status(400).send({ error });
    }

    return res.status(201).send({ user });
  }

  all = async (req: Request, res: Response, next: any) => {

    const [error, tasks] = await to(this.taskService.all());

    if (error) {
      return res.status(400).send({ error });
    }

    return res.status(200).send({ tasks });

  }

  one = async (req: Request, res: Response, next: any) => {

    const { id } = req.params;

    const [error, task] = await to(this.taskService.one(id));

    if (error) {
      return res.status(400).send({ error });
    }

    return res.status(200).send({ task });

  }

  update = async (req: Request, res: Response, next: any) => {

    try {

      const { id } = req.params;

      const err = validation(req);

      if (err) {
        return res.status(400).send({ err });
      }

      const [error, updated] = await to(this.taskService.update(id, req.body));

      if (error) {
        return res.status(400).send({ error });
      }

      return res.send({ updated });

    } catch (error) {
      return error.message;
    }


  }

  delete = async (req: Request, res: Response, next: any) => {

    let { id } = req.params;

    const [error, deleted] = await to(this.taskService.delete(id));

    if (error) {
      return res.status(400).send({ error });
    }

    return res.status(200).send({ deleted });

  }

}


