import React from 'react'

// pages/obra.js
import React, { useState } from 'react';

const Obra = () => {
  const [novaObra, setNovaObra] = useState({
    numeroObra: '',
    nomeObra: '',
    contato: '',
    tipoObra: '',
    areaConstruida: '',
    dataSolicitacao: '',
    periodoObraQuizena: '',
    periodoObraMes: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: '',
    bairro: '',
    telefoneFixo: '',
    celular: '',
    email1: '',
    email2: '',
    tipoDocumento: '',
    documento: '',
  });

  const adicionarNovaObra = async () => {
    try {
      // Faça uma requisição para o backend com as informações da nova obra
      const response = await fetch('/api/obras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ novaObra }),
      });

      if (response.ok) {
        console.log('Nova obra adicionada com sucesso!');
        // Aqui você pode redirecionar ou realizar outras ações após adicionar a obra
      } else {
        console.error('Erro ao adicionar nova obra:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao adicionar nova obra:', error.message);
    }
  };

  // Função para atualizar o estado de novaObra quando os campos do formulário mudarem
  const handleInputChange = (field, value) => {
    setNovaObra((prevObra) => ({
      ...prevObra,
      [field]: value,
    }));
  };

  return (
    <div className="container container-branco">
      {/* ... (código anterior) */}

      <div className="row mt-3">
        <div className="col-md-3 mb-2 scrollable-content">
          <label id="numero_obra" className="custom-label">
            Número da Obra
          </label>
          <input
            id="numero_obra"
            type="text"
            className="form-control"
            placeholder="Número da Obra"
            onChange={(e) => handleInputChange('numeroObra', e.target.value)}
            // Adicione outros eventos conforme necessário (onFocus, onBlur, etc.)
          />
        </div>

        {/* Outros campos do formulário com eventos onChange semelhantes */}
      </div>

      {/* ... (mais campos do formulário) */}

      <div className="row mt-3">
        <div className="col-md-3 mb-2 scrollable-content">
          <label id="cpf_cnpj" className="custom-label">
            P.Física / P.Jurídica
          </label>
          <div className="mui-select">
            <select
              id="cpf_cnpj"
              className="form-select"
              onChange={(e) => handleInputChange('tipoDocumento', e.target.value)}
            >
              {/* Opções do select para tipo de documento */}
              <option value="" disabled selected>
                Selecione
              </option>
              <option value="cpf">P.FÍSICA</option>
              <option value="cnpj">P.JURIDICA</option>
            </select>
          </div>
          <input
            id="documento"
            type="text"
            className="form-control mt-2"
            placeholder="Digite o CPF ou CNPJ"
            onChange={(e) => handleInputChange('documento', e.target.value)}
            // Adicione outros eventos conforme necessário
          />
        </div>
      </div>

      {/* ... (outros grupos e campos do formulário) */}

      {/* Botão Adicionar Nova Obra */}
      <div className="row mt-3">
        <div className="col-md-4 mt-3">
          <button
            id="btn_adicionar_obra"
            onClick={adicionarNovaObra}
            className="btn btn-block button-height"
            style={{
              backgroundColor: '#4caf50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <span className="material-icons" style={{ marginRight: '8px' }}>
              add
            </span>
            Adicionar Nova Obra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Obra;
