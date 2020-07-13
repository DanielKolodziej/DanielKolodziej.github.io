import React, {useRef} from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Footer from './Footer';

// //scrollbar for mozilla
// scrollbarWidth: 'thin',
// scrollbarColor: 'rgba(0,0,0,0.3) #ffc324',
// // scrollbar for chrome/edge
// '&::-webkit-scrollbar-track': {
//   // backgroundColor: 'rgba(0,0,0,0.5)',
//   borderRadius: '10px',
//   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.85)',
// },
// '&::-webkit-scrollbar': {
//   height: '7px',
// },
// '&::-webkit-scrollbar-thumb': {
//   borderRadius: '10px',
//   backgroundColor: '#FFF',
//   backgroundImage: '-webkit-linear-gradient(top,#f5dc9a 0%,#fcd879 50%,#ffc324 51%,#ffcf52 100%)',
// },

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
