import { IUser, userAddArgs } from "../types/users"

export class UsersRouter {
    private endpoint = `${import.meta.env.VITE_API_BASE_URL}user`
    private headers = new Headers()

    constructor(){
      this.headers.append('content-Type','application/json')
    }


    save = async (args: userAddArgs) => {
        return await fetch(this.endpoint, {
          headers: this.headers,
          method: 'POST',
          body: JSON.stringify(args)
        })   
    }

    update = async (id: number, args: IUser) => {
        return await fetch(this.endpoint + `/${id}`, {
          headers: this.headers,
          method: 'PATCH',
          body: JSON.stringify(args)   
        })
    }

    validate = async (args: {email: string, password:string}) => {
        return await fetch(`${this.endpoint}/user/auth`, {
            headers: this.headers,
            method: 'POST',
            body: JSON.stringify(args)
        })
    }

}