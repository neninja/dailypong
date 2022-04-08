import { useState } from 'react'

import { useColegas } from 'contexts/colegas'
import { Form, Button } from 'react-bulma-components';

export function Cadastro(){
  const [ colega, setColega ] = useState("")
  const { colegas, setColegas } = useColegas()

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    const sorted = [...colegas, colega].sort()
    setColegas(sorted)
    setColega("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form.Field kind='addons'>
        <Form.Control>
          <Form.Input
            type="text"
            value={colega}
            onChange={e => setColega(e.target.value)}
            placeholder="Nome"/>
        </Form.Control>
        <Form.Control>
          <Button color="primary" submit>Cadastrar colega</Button>
        </Form.Control>
      </Form.Field>
    </form>
  )
}
