import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {Container,Col} from 'react-bootstrap'
import Post from './repo-post/post'
import './style.css'
import {LanguageContext} from '../context/Language'

export default function Repos(){
    
    const [value,setValue] = useState(undefined)

    useEffect(() => {
        axios({
            url: 'https://api.github.com/users/jack5341/repos',
            method: "GET"
        }).then((res) => {
            setValue(res.data)
        })
    },[]);    

    const lang = useContext(LanguageContext)

    if(value){
        return (
            <Col sm={6}>
                <p className="title">
                    {(lang === "en") ? ("My Repositories and Forks") :
                        (lang === "de") ? ("Meine Repositories und Forks") :
                        (lang === "tr") ? ("Repolarım ve Forklarım") : undefined}
                </p>
                <Container className="post-container text-left overflow-auto">
                    {
                        value.map((element,key) => <Post key={key} subject={element.name} description={element.description} />)
                    }
                </Container>
            </Col>
        )
    }

    return null
}