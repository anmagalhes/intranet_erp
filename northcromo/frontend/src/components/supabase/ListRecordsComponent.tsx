// src/components/supabase/ListRecordsComponent.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

//NOME DA TABELA
interface ListRecordsComponentProps {
  tableName: string;
}

const ListRecordsComponent: React.FC<ListRecordsComponentProps> = ({ tableName }) => {
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const { data, error } = await supabase.from(tableName).select('*');
      if (error) {
        console.error('Erro ao obter registros:', error);
        // Adicione lógica para lidar com erros, como exibir uma mensagem de erro.
      } else {
        setRecords(data || []);
      }
    };

    fetchRecords();
  }, [tableName]);

  return (
    <div>
      <h2>Registros de {tableName}</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>{JSON.stringify(record)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRecordsComponent;
