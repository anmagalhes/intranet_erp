// server.ts
import express from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { ListRecordsController } from './controllers/supabase/ListRecordsController';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Endpoint para criar usuário
const createUserController = new CreateUserController();
app.post('/users', createUserController.handle);

// Endpoint para listar registros em uma tabela Supabase
const listRecordsController = new ListRecordsController();
app.get('/supabase/:tableName', listRecordsController.handle);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
