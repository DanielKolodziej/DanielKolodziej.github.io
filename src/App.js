import React, {useRef} from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Footer from './Footer';

const App = () => {
  const refSection1 = useRef()
  const refSection2 = useRef()
  const refSection3 = useRef()
  return (
    <>
      <Nav 
        refSection1={refSection1}
        refSection2={refSection2}
        refSection3={refSection3}/>
      <Hero />
      <Projects refSection1={refSection1}/>
      <Skills refSection2={refSection2}/>
      <About refSection3={refSection3}/>
      <Footer />
    </>
  );
}

export default App;
