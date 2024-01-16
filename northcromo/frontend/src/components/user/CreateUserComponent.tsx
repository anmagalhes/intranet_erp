// src/components/user/CreateUserComponent.tsx
import React, { useState } from 'react';

interface CreateUserComponentProps {
  onCreateUser: (name: string, email: string, password: string) => void;
}

const CreateUserComponent: React.FC<CreateUserComponentProps> = ({ onCreateUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUser = () => {
    onCreateUser(name, email, password);
    // Adicione lógica adicional conforme necessário, como limpar os campos ou exibir mensagens de sucesso.
  };

  return (
    <div>
      <h2>Criar Usuário</h2>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleCreateUser}>Criar Usuário</button>
    </div>
  );
};

export default CreateUserComponent;
