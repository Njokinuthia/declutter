import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/home/Home.js"
import Login from "./components/login/Login.js";
import Adpage from "./components/adpage/Adpage.js";
import Catalog from "./components/catalog/Catalog.js";


import './App.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/adpage" element={<Adpage />}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
