import imageback from '../src/images/green-space.png';
import Container from './container';
import NavbBar from './NavBar';
function Herosection() {
    return (
      <>
      <NavbBar />
      <img src={imageback} alt="image" />
      <Container />
      </>
    );
  }
  
  export default Herosection;