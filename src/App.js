
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Information from './Components/Information';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Liquidity from './Components/Liquidity';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<div ><Home /> <Information /></div>} />
          <Route exact path="/liquidity" element={<div ><Liquidity /></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
