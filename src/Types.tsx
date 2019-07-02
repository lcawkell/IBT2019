export interface ITodo {
    id:number;
    title:string;
    description:string;
    status: Status
}

export enum Status {
    'InProgress',
    'Complete'
}