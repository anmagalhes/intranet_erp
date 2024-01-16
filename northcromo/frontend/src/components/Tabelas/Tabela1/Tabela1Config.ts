// src/components/Tabelas/Tabela1/Tabela1Config.ts
import Tabulator from 'tabulator-tables';

interface Tabela1Config {
  selector: string;
  columns: any[];
  data: any[];
}

function initializeTabela1(config: Tabela1Config) {
  const { selector, columns, data } = config;
  const table = new Tabulator(selector, { columns, data });
}

export default initializeTabela1;
