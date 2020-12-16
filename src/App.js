import {Container,Row} from 'react-bootstrap'
import Profile from './component/profile'
import Repos from './component/repos'

function App() {
  return (
      <Container className="text-light text-center mt-3 mb-3">
        <Row>
          <Profile/>
          <Repos/>
        </Row>
      </Container>
  )
}

export default App;
