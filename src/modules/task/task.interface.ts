export interface ITaskCreate{
    title:string,
    description:string,
    status:string
}

export interface ITaskUpdate {
    title?:string,
    description?:string,
    status?:string
}

export interface ITask{
    id?:string,
    title:string
    description:string
    status:string
};