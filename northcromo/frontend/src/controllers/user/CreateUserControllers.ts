import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserServices';

class CreateUserControllers {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const createUserService = new CreateUserService();
      const user = await createUserService.execute({
        name,
        email,
        password,
      });

      return res.json({ user });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
}

export { CreateUserControllers };
