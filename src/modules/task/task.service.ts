import { ITask, ITaskCreate, ITaskUpdate } from './task.interface';
import { AppDataSource } from '../../app';
import { Task } from '../../models/task/task.entity';
import { CustomError } from '../../common/error';
import to from 'await-to-js';

export class TaskService {

    public taskRepository: any;
    constructor() {
        this.taskRepository = AppDataSource.getRepository(Task);
    }

    async create(data: ITaskCreate): Promise<Task> {

        try {

            const [errorTask, task] = await to(
                this.taskRepository.findOne({
                    where: [
                        { title: data.title },
                    ]
                })
            );

            if (errorTask) {
                throw new CustomError(`Query failed, ${errorTask}`, 400);
            }

            if (task) {
                throw new CustomError("La tarea ya fue creada", 406);
            }

            try {
                const newTask = await this.taskRepository.save(data);
                console.log('new task', newTask);
                return newTask;
            } catch (error) {
                console.error('Error registering:', error);
                throw new CustomError(`Query failed, ${error.message}`, 400);
            }
        } catch (error) {
            return error.message;
        }

    }

    async all(): Promise<ITask[]> {
        try {
            const tasks = await this.taskRepository.find();
            return tasks;
        } catch (error) {
            console.error('Error consulting:', error);
            throw new CustomError(`Query failed, ${error.message}`, 400);
        }
    }

    async one(id: string): Promise<ITask> {
        try {
            const task = await this.taskRepository.findOne({
                where: {
                    id
                },
            });
            return task;
        } catch (error) {
            console.error('Error consulting:', error);
            throw new CustomError(`Query failed, ${error.message}`, 400);
        }

    }

    async update(id: string, data: ITaskUpdate): Promise<ITask> {

        try {
            const [errorExist, task] = await to(
                this.taskRepository.findOne({
                    where: {
                        id
                    },
                })
            );

            if (errorExist) {
                throw new CustomError(`Query failed, ${errorExist}`, 400);
            }

            if (!task) {
                throw new CustomError('El producto no existe', 404);
            }

            const updatedTask = this.taskRepository.merge(
                task,
                data,
            );

            try {
                const newTask = await this.taskRepository.save(updatedTask);
                console.log('task updated', newTask);
                return newTask;
            } catch (error) {
                console.error('Error updated product:', error);
                throw new CustomError(`Query failed, ${error}`, 400);
            }

        } catch (error) {
            return error;
        }
    }

    async delete(id: string) {
        try {
            const [errorDeleted, deleted] = await to(
                this.taskRepository.delete(id)
            );

            if (errorDeleted) {
                throw new CustomError(`Query failed, ${errorDeleted.message}`, 400);
            }

            return deleted;

        } catch (error) {
            return error.message;
        }
    }

}