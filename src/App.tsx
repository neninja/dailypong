import { ColegasProvider } from 'contexts/colegas'
import { Cadastro } from 'components/Cadastro'
import { TabelaDeContatos } from 'components/TabelaDeContatos'

function App() {
  return (
    <main>
      <ColegasProvider>
        <Cadastro />
        <TabelaDeContatos />
      </ColegasProvider>
    </main>
  )
}

export default App;
