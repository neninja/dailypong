import { useColegas } from 'contexts/colegas'

export function TabelaDeContatos() {
  const { colegas, setColegas } = useColegas()

  function handleExcluir(index: number){
    setColegas(colegas.filter((c, i) => i !== index))
  }

  return (
    <main>
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
