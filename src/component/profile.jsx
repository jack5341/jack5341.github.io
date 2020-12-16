import {Figure,Col} from 'react-bootstrap'
import Pp from '../assets/pp.jpg'

export default function Body(){
    return (
        <Col sm={6}>
            <Figure className="text-center">
                <Figure.Image
                    width={200}
                    height={200}
                    alt="171x180"
                    src={Pp}
                />
                <Figure.Caption className="text-light">
                    Nedim Akar <br/>
                    <p>
                    <a target="_blank" rel="noreferrer" href="https://github.com/jack5341">
                        (jack5341)
                    </a><br/>
                    <small>
                        Junior Developer
                    </small>
                    </p>
                    <hr className="hr bg-white"></hr>
                    <p className="small">
                        Hi, my name is Nedim AKAR. I am learning programming since 2017. As the part of learning process, I made more than 5 web application and few of them can be defined as complex projects.Repository of the projects are available on my Github profile.
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
                </Figure.Caption>
            </Figure>
        </Col>
    )
}