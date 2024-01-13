export default function Login(){
    return
    <form action="/auth/login" method="post">
        <label htmlFor="email">Email</label>
        <input
              name="email" />
       <label htmlFor="passoword">Passoword</label>
       <input type="password" name="password"/>
       <button>Sing Up</button>
        
    </form>
}