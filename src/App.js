import Header from './components/header/Header'
import Hero from "./components/hero/Hero";
import Input from './components/input/Input';
import BoostLinks from "./components/boostlinks/BoostLinks"
import Statistics from "./components/statistics/Statistics"
import Footer from './components/footer/Footer';
import './App.css';
import React, { useState } from "react";
import validator from 'validator'

function App() {
  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {
    if (validator.isURL(value)) {
      setErrorMessage("Is valid rrl")
    } else {
      setErrorMessage("Is not a valid url")
    }

  }



  return (
    <div>
      <Header />
      <Hero />
      <Input validate={validate}/>
      <Statistics />
      <BoostLinks />
      <Footer />
    </div>

  );
}

export default App;
