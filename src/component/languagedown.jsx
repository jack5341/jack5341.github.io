import {Dropdown,DropdownButton} from 'react-bootstrap'
import './style.css'

export default function LanguageDown(){

    function changeLanguage(e){
        e.preventDefault()

        switch (e.target.innerHTML) {
            case "English - EN":
                window.location.pathname = "lang=" + "en"
                break
            case "Deutsch - DE":
                window.location.pathname = "lang=" + "de"
                break
            case "Türkçe - TR":
                window.location.pathname = "lang=" + "tr"
                break
        }
    }

    return (
        <DropdownButton id="dropdown-item-button" className="mb-5" title="Choose Language">
            <Dropdown.Item id="en" onClick={changeLanguage}>English - EN</Dropdown.Item>
            <Dropdown.Item id="de" onClick={changeLanguage}>Deutsch - DE</Dropdown.Item>
            <Dropdown.Item id="tr" onClick={changeLanguage}>Türkçe - TR</Dropdown.Item>
        </DropdownButton>
    )
}