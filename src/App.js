import './App.css';
import Header from './header';
import About from './about';
import Projects from './projects';
import Footer from './footer';

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
