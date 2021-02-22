import {useEffect,useContext,useState} from 'react'
import {Figure,Col} from 'react-bootstrap'
import axios from 'axios'
import {LanguageContext} from '../context/Language'

export default function Body(){

    const value = useContext(LanguageContext)
    const [avatar,setAvatar] = useState()

    useEffect(() => {
        axios({
            url: "https://api.github.com/users/jack5341",
            method: "GET"
        }).then((res) => {
            setAvatar(res.data.avatar_url)
        })
    },[])

    return (
        <Col sm={6}>
            <Figure className="text-center">
                <Figure.Image
                    className="rounded-pill"
                    style={{border: "3px solid white"}}
                    width={200}
                    height={200}
                    alt="171x180"
                    src={avatar}
                />
                <Figure.Caption className="text-light">
                    Nedim Akar <br/>
                    <p>
                    <a style={{color: "#b5d9ff"}} target="_blank" rel="noreferrer" href="https://github.com/jack5341">
                        (jack5341)
                    </a><br/>
                    <small>
                        {(value === "en") ? ("Junior Developer") :
                         (value === "de") ? ("Junior Entwickler") :
                         (value === "tr") ? ("Junior Geliştirici") : undefined}
                    </small>
                    </p>
                    <a className="text-light" target="_blank" rel="noreferrer" href="https://steamcommunity.com/id/jack5341">
                        <i className="fab fa-steam"></i>
                    </a>
                    <a className="text-light" target="_blank" rel="noreferrer" href="https://github.com/jack5341">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="text-light" href="https://www.linkedin.com/in/nedim-akar-9a4982189/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                     <a className="text-light" href="https://open.spotify.com/user/c0fk9u5rl5t70j643k3la0swo?si=8ta-JhcDRWaXWKu1ii3yFg" target="_blank" rel="noreferrer">
                        <i class="fab fa-spotify"></i>
                    </a>
                    <a className="text-light" href="https://www.facebook.com/nedim.akar.9822/" target="_blank" rel="noreferrer">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <hr className="hr bg-white"></hr>
                    <p className="small">
                        {
                            (value === "en") ? ("Hi, my name is Nedim Akar.I am learning programming since 2017. As the part of learning process, I made more than 5 web application and few of them can be defined as complex projects.Repository of the projects are available on my Github profile.") : 
                            (value === "de") ? ("Hallo, mein Name ist Nedim Akar. Ich lerne seit 2017 programmieren. Als Teil des Lernprozesses, habe ich mehr als 5 Webanwendungen erstellt und einige davon können als komplexe Projekte definiert werden. Das Repository der Projekte ist in meinem Github-Profil verfügbar."):
                            (value === "tr") ? ("Merhaba, benim adım Nedim Akar.2017 den beri programlama öğreniyorum.Bu süreçte,5 den fazla kompleks denilebilecek web projelerim oldu.Projelerimi Github hesabımda bulabilirsiniz !"): undefined
                        }
                    </p>
                </Figure.Caption>
            </Figure>
        </Col>
    )
}