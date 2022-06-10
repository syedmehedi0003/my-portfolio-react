import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Header from '../src/Pages/Header/Header';
import MyWork from './Pages/MyWork/MyWork';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Skill from './Pages/Skill/Skill';
import Project1 from './Pages/MyWork/Project1';
import Project2 from './Pages/MyWork/Project2';
import Project3 from './Pages/MyWork/Project3';

function App() {
  return (
    <div className="App">

      <div className='max-w-7xl mx-auto lg:px-12'>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mywork" element={<MyWork></MyWork>} />
          <Route path="about" element={<About></About>} />
          <Route path="skill" element={<Skill></Skill>} />
          <Route path="contact" element={<Contact></Contact>} />
          <Route path="project1" element={<Project1></Project1>} />
          <Route path="project2" element={<Project2></Project2>} />
          <Route path="project3" element={<Project3></Project3>} />

        </Routes>


      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

