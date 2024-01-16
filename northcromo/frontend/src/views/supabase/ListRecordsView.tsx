// src/views/supabase/ListRecordsView.tsx
import React from 'react';
import ListRecordsComponent from '../../components/supabase/ListRecordsComponent';

const ListRecordsView: React.FC = () => {
  return (
    <div>
      <h1>Registros do Supabase</h1>
      {/* Aqui você precisa passar o nome da tabela como propriedade */}
      <ListRecordsComponent tableName="views" />
    </div>
  );
};

export default ListRecordsView;
