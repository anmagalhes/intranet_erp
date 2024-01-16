// controllers/supabase/ListRecordsController.ts
import { Request, Response } from 'express';
import { ListRecordsService } from '../../services/supabase/ListRecordsService';

class ListRecordsController {
  async handle(req: Request, res: Response) {
    try {
      const { tableName } = req.params;

      const listRecordsService = new ListRecordsService();
      const records = await listRecordsService.execute(tableName);

      return res.json(records);
    } catch (error) {
      console.error('Erro ao listar registros:', error);
      return res.status(500).json({ error: 'Erro ao listar registros' });
    }
  }
}

export { ListRecordsController };
