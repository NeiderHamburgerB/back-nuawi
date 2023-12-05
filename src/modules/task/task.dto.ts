import { check } from "express-validator";

export const TaskCreateDto = [
    check('title').isString(),
    check('description').isString(),
];

export const TaskUpdateDto = [
    check('title').isString().optional({nullable: true}),
    check('description').isString().optional({nullable: true}),
    check('status').isString().optional({nullable: true}),
];