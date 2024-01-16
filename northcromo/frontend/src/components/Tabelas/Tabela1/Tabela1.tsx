// src/components/Tabelas/Tabela1/Tabela1.tsx
import React, { useEffect } from 'react';
import initializeTabela1 from './Tabela1Config';

const Tabela1: React.FC = () => {
  useEffect(() => {
    const tabela1Config = {
      selector: '#tabela1',
      columns: [...], // Defina suas colunas aqui
      data: [...],    // Defina seus dados aqui
    };

    initializeTabela1(tabela1Config);
  }, []);

  return <div id="tabela1"></div>;
};

export default Tabela1;
