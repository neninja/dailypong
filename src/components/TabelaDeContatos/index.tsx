import React from 'react'
import { Table, Button } from 'react-bulma-components';

import { useColegas } from 'contexts/colegas'

export function TabelaDeContatos() {
  const { colegas, setColegas } = useColegas()

  function handleExcluir(index: number){
    setColegas(colegas.filter((c, i) => i !== index))
  }

  return (
    <main>
      <Table size='fullwidth' hoverable>
        <thead>
          <tr>
            <th>Colega</th>
            <th className="has-text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {colegas.map((nome, i) => (
            <tr key={i}>
              <td>
                <label>
                <input type='checkbox'/>
                  <span style={{marginLeft: '1rem'}}>
                {nome}
                  </span>
                </label>
              </td>
              <td className="has-text-right">
                <Button
                  color='danger'
                  onClick={(e: React.FormEvent) => handleExcluir(i)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
}
