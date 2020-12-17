import {useState} from 'react'
import {Container,Row,Dropdown,DropdownButton} from 'react-bootstrap'
import Profile from './component/profile'
import Repos from './component/repos'
// import LanguageDropdown from './component/languagedown'

// Context api
import {LanguageContext} from './context/Language'

function App() {
  const [lang,setLang] = useState("en")

  function changeLanguage(e){
    e.preventDefault()
  
    switch (e.target.innerHTML) {
        case "English - EN":
            setLang("en")
            break
        case "Deutsch - DE":
            setLang("de")
            break
        case "Türkçe - TR":
            setLang("tr")
            break
        default:
            setLang("en")
    }
  }
  
  return (
    <LanguageContext.Provider value={lang}>
      <Container className="text-light text-center mt-3 mb-3">
        <DropdownButton id="dropdown-item-button" className="mb-5" title="Choose Language">
          <Dropdown.Item id="en" onClick={changeLanguage}>English - EN</Dropdown.Item>
          <Dropdown.Item id="de" onClick={changeLanguage}>Deutsch - DE</Dropdown.Item>
          <Dropdown.Item id="tr" onClick={changeLanguage}>Türkçe - TR</Dropdown.Item>
        </DropdownButton>
        <Row>
          <Profile/>
          <Repos/>
        </Row>
      </Container>
    </LanguageContext.Provider>
  )
}

export default App;
