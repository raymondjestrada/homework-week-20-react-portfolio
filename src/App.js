import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [navigation] = useState([
    {
      name: "About Me"
    },
    {
      name: "Projects"
    },
    {
      name: "Contact Me"
    },
    {
      name: "Resume"
    }
  ]);

  const [currentNav, setCurrentNav] = useState(navigation[0]);

  function pageRender(navSelection) {
    if (navSelection === 'About Me') {
      return <About></About>;
    }

    if (navSelection === 'Projects') {
      return <Project></Project>;
    }

    if (navSelection === 'Contact Me') {
      return <Contact></Contact>;
    }

    if (navSelection === 'Resume') {
      return <Resume></Resume>;
    }
    
  }

  return (
    <>
      <Header
        navigation={navigation}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      ></Header>
      <main>
          {pageRender(currentNav.name)}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
