interface UseRequest {
    name: string;
    email: string;
    password: string;
  }
  
  class CreateUserService {
    async execute({ name, email, password }: UseRequest) {
      console.log(name);
  
      // Aqui você pode implementar a lógica para criar o usuário no banco de dados ou fazer outras operações
  
      return { ok: true };
    }
  }
  
  export { CreateUserService };
  