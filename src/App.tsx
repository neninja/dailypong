import 'bulma/css/bulma.min.css';
import { Hero, Container } from 'react-bulma-components';

import { ColegasProvider } from 'contexts/colegas'
import { Cadastro } from 'components/Cadastro'
import { TabelaDeContatos } from 'components/TabelaDeContatos'

function App() {
  return (
    <main>
      <ColegasProvider>
        <Hero size='fullheight'>
          <Hero.Body>
            <Container>
              <TabelaDeContatos />
            </Container>
          </Hero.Body>
        </Hero>
        <Hero size='fullheight'>
          <Hero.Body>
            <Container>
              <Cadastro />
            </Container>
          </Hero.Body>
        </Hero>
      </ColegasProvider>
    </main>
  )
}

export default App;
