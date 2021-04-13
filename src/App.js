import Header from './components/header/Header'
import Hero from "./components/hero/Hero";
import Input from './components/input/Input';
import BoostLinks from "./components/boostlinks/BoostLinks"
import Statistics from "./components/statistics/Statistics"
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Input />
      <Statistics />
      <BoostLinks />
      <Footer />
    </div>

  );
}

export default App;
