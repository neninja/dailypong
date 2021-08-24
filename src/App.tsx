import React, { useState, useEffect } from 'react'

function App() {
  const [ colega, setColega ] = useState("")
  const [ colegas, setColegas ] = useState<string[]>([])

  useEffect(() => {
    let c = localStorage.getItem('@dailypong') ?? '[]'
    setColegas(JSON.parse(c))
  }, [])

  useEffect(() => {
    localStorage.setItem('@dailypong', JSON.stringify(colegas))
  }, [colegas])

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()

    setColegas([...colegas, colega])
    setColega("")
  }

  function handleExcluir(index: number){
    setColegas(colegas.filter((c, i) => i !== index))
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" value={colega} onChange={e => setColega(e.target.value)}/>
        <input type="submit" value="Cadastrar colega"/>
      </form>

      <table>
        <tr>
          <th>Falou</th>
          <th>Colega</th>
          <th>Excluir</th>
        </tr>
        {colegas.map((nome, i) => (
          <tr key={i}>
            <td>
              <input type='checkbox'/>
            </td>
            <td>
              {nome}
            </td>
            <td>
              <button onClick={e => handleExcluir(i)}>Excluir</button>
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
}

export default App;
