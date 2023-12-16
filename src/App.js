import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
