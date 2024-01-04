export interface IAdmin {
  id: number;
  user: string;
  password: string;
  uuid?: string;
}

export interface validateResp {
    message: string;
    user?: IAdmin;
}