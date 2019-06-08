import React from 'react';
import './App.scss';
//Components
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Falcon9 from './components/Falcon9/Falcon9';
import Technical from './components/Technical/Technical';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Description />
      <Falcon9 />
      <Technical />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
