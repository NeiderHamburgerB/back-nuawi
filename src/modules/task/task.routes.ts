import { TaskController } from "./task.controller";
import { TaskCreateDto } from "./task.dto";
import { Router } from "express";

export class TaskRoutes {

    public router: Router = Router();
    public controller = new TaskController();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.post('/create', [...TaskCreateDto], this.controller.create);

        this.router.get('/all', this.controller.all);

        this.router.get('/one/:id', this.controller.one);

        this.router.patch('/update/:id', this.controller.update)

        this.router.delete('/delete/:id', this.controller.delete)
    }

}

const taskRoutes = new TaskRoutes();

export default taskRoutes.router;