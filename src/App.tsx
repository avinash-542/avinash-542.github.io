import MenuBar from './components/MenuBar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import StatusBar from './components/StatusBar';
import avatar from './assets/avatar.jpg';

export default function App() {
  return (
    <>
      <MenuBar />
      <main style={{ paddingTop: 36 }}>
        <Hero avatar={avatar} />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <StatusBar />
    </>
  );
}