import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/Logotipo_terminado.png';

export default function Header (){
    return(
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logotipo"
            src={`${logo}`}
            width="55"
            height="60"
            className="d-inline-block align-top"
          />{' '}
          <h1>PROYECT FITNESS</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
    )
}