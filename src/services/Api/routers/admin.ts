export class AdminRouter {
    private endpoint = "http://localhost:3001/admin/"
    private headers = new Headers()

    constructor(){
      this.headers.append('content-Type','application/json')
    }

    validate = async (args:{email: string, password: string}) => {
       return await fetch(this.endpoint +"auth", {
            headers:this.headers,
            method: 'post',
            body: JSON.stringify(args)
        }).then((resp)=> resp.json())    
   }
}