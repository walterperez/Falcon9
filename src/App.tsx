import React from 'react';
import './App.scss';
//Components
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Falcon9 from './components/Falcon9/Falcon9';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Description />
      <Falcon9 />
    </div>
  );
};

export default App;
