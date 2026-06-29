import Header from '@/components/layout/header/Header';
import Home from '@/pages/home/Home';
import About from '@/pages/about/About';
import Projects from '@/pages/projects/Projects';
import Experience from '@/pages/experience/Experience';
import DesignSystem from '@/pages/designSystem/DesignSystem';
import Connect from '@/pages/connect/Connect';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <DesignSystem />
        <Connect />
      </main>
      <Footer />
    </>
  );
}

export default App;
