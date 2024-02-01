import React, { useState } from 'react';
import sdk from '@crossmarkio/sdk';

const Formulario = () => {
  // Estados para armazenar os valores dos campos
  const [endereco, setEndereco] = useState('');

  const [valor, setValor] = useState('');

  const handleOnClick = () => {
    sdk.signAndSubmit({
      TransactionType: 'Payment',
      Account: sdk.signIn(),
      Destination: endereco,
      Amount: valor,
    });
  }

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Formulário</h2>
          <form>
            {/* Seção Endereço */}
            <div className="mb-3">
              <h4>Endereço</h4>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="endereco"
                    placeholder="Chave"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Seção Valor */}
            <div className="mb-3">
              <h4>Valor</h4>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="valor"
                    placeholder="R$"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>

          <button onClick={handleOnClick}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;