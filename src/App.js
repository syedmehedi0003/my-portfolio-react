import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Header from '../src/Pages/Header/Header';
import Banner from './Pages/Banner/Banner';
import MyWork from './Pages/MyWork/MyWork';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">

      <div className='max-w-7xl mx-auto lg:px-12'>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mywork" element={<MyWork></MyWork>} />
          <Route path="contact" element={<Contact></Contact>} />

        </Routes>


      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

