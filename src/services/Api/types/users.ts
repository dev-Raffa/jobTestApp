export interface userAddArgs {
    email: string;
    password: string;
}

export interface IUser extends userAddArgs {
    id: number;
    uuid?: string;
    enrolledInCourses?: Array<number>;
    completedClasses?: Array<number>;
}
  
export interface userValidateResponse {
    status: number
    mensage?: string
    user?: IUser
}

export interface userValidateArgs {
    email: string,
    password: string
}