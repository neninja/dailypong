import 'bulma/css/bulma.min.css';
import { Container, Section } from 'react-bulma-components';

import { ColegasProvider } from 'contexts/colegas'
import { Cadastro } from 'components/Cadastro'
import ListaDeColegas from 'components/ListaDeColegas'

function App() {
  return (
    <main>
      <ColegasProvider>
        <Container>
          <Section>
            <ListaDeColegas />
          </Section>
          <Section>
            <Cadastro />
          </Section>
        </Container>
      </ColegasProvider>
    </main>
  )
}

export default App;
