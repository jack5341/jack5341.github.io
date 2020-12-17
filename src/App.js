import {Container,Row} from 'react-bootstrap'
import Profile from './component/profile'
import Repos from './component/repos'
import LanguageDropdown from './component/languagedown'

// Context api
import {LanguageContext} from './context/Language'

function LanguagePicker(){
  switch (window.location.pathname.replace(/[/]/, '')) {
    case "lang=en":
        return "en"
    case "lang=de":
        return "de"
    case "lang=tr":
        return "tr"
    default:
        return "en"
    }
}

function App() {
  return (
    <LanguageContext.Provider value={LanguagePicker()}>
      <Container className="text-light text-center mt-3 mb-3">
        <LanguageDropdown/>
        <Row>
          <Profile/>
          <Repos/>
        </Row>
      </Container>
    </LanguageContext.Provider>
  )
}

export default App;
