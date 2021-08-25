import { useState } from 'react'

import { useColegas } from 'contexts/colegas'

export function Cadastro(){
  const [ colega, setColega ] = useState("")
  const { colegas, setColegas } = useColegas()

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()

    setColegas([...colegas, colega])
    setColega("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={colega} onChange={e => setColega(e.target.value)}/>
      <input type="submit" value="Cadastrar colega"/>
    </form>
  )
}
