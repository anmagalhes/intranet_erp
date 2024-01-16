// src/views/user/CreateUserView.tsx
import React from 'react';
import CreateUserComponent from '../../components/user/CreateUserComponent';

const CreateUserView: React.FC = () => {
  const handleCreateUser = (name: string, email: string, password: string) => {
    // Implemente a lógica para enviar os dados do usuário ao backend para criação.
    console.log('Criar usuário:', { name, email, password });
  };

  return (
    <div>
      <h1>Criar Usuário</h1>
      <CreateUserComponent onCreateUser={handleCreateUser} />
    </div>
  );
};

export default CreateUserView;
