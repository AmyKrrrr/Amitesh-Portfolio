import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" element={
            <main>
              <Hero/>
              <About/>
              <Skills/>
              <Contact/>
            </main>
          }
        />
        <Route
          path="/blogs"
          element={
            <Blog/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
