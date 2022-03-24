import 'bulma/css/bulma.min.css';
import { Hero, Container } from 'react-bulma-components';

import { ColegasProvider } from 'contexts/colegas'
import { Cadastro } from 'components/Cadastro'
import ListaDeColegas from 'components/ListaDeColegas'

function App() {
  return (
    <main>
      <ColegasProvider>
        <Hero size='fullheight'>
          <Hero.Body>
            <Container>
              <ListaDeColegas />
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
