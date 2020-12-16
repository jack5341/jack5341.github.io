import {useState,useEffect} from 'react'
import axios from 'axios'
import {Container,Col} from 'react-bootstrap'
import Post from './repo-post/post'
import './style.css'

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

    if(value){
        return (
            <Col sm={6}>
                <Container className="post-container text-left overflow-auto">
                    {
                        value.map((element,key) => <Post key={key} subject={element.name} description={element.description} />)
                    }
                    {/* <Post subject={null} description={null} /> */}
                </Container>
            </Col>
        )
    }

    return null
}