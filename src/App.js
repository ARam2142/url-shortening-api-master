// import Header from './components/header/header.js';
import Container from './components/container/container.js';
import FirstGrid from './components/FirstGrid/firstgrid';
import SecondGrid from './components/SecondGrid/secondgrid.js';
import ThirdGrid from './components/ThirdGrid/thirdgrid.js';
import FourthGrid from './components/FourthGrid/fourthgrid.js';
import './App.css';

function App() {
  return (
    <Container>
      <FirstGrid />
      <SecondGrid />
      <ThirdGrid />
      <FourthGrid />
    </Container>

  );
}

export default App;
