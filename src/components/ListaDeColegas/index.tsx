import React from 'react'
import { Columns, Card } from 'react-bulma-components';

import './index.css';

import { useColegas } from 'contexts/colegas'

export default function C() {
  const { colegas, setColegas } = useColegas()

  function handleExcluir(index: number){
    setColegas(colegas.filter((c, i) => i !== index))
  }

  return (
    <Columns renderAs="ul">
      {colegas.map((nome, i) => (
        <Columns.Column narrow={true} renderAs="li">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <label>
                  <input type='checkbox'/>
                  <span>
                    {nome}
                  </span>
                </label>
                <span onClick={(e: React.FormEvent) => handleExcluir(i)} />
              </Card.Header.Title>
            </Card.Header>
          </Card>
        </Columns.Column>
      ))}
    </Columns>
  );
}
