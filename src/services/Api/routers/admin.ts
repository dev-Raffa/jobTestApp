export class AdminRouter {
    private endpoint = `${import.meta.env.VITE_API_BASE_URL}admin/`
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