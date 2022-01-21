import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Bio from './components/Bio';

function App() {
  return (
    <>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/bio' element={<Bio/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
