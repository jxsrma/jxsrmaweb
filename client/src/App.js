import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Bio } from "./Components/Bio";
import { Releases } from "./Components/Releases";
import { Shop } from "./Components/Shop";
import { Demos } from "./Components/Demos";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Contact } from "./Components/Contact";

function App() {

  return (
    <>
      

      <Router>
      <Header />

        <Routes>
        <Route exact path="/" element={<Home active = 'activeLink' title = "Official Site"/>}/>
        <Route exact path="/biography" element={<Bio title = "Biography"/>}/>
        <Route exact path="/releases" element={<Releases title = "Releases"/>}/>
        <Route exact path="/shop" element={<Shop title = "Shop"/>}/>
        <Route exact path="/demos" element={<Demos title = "Demo Submittion"/>}/>
        <Route exact path="/contact" element={<Contact title = "Contact Us"/>}/>

        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
