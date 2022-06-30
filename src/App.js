import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react";
import Home from "./components/home/Home.js"
import Login from "./components/login/Login.js";
import Adpage from "./components/adpage/Adpage.js";
import Catalog from "./components/catalog/Catalog.js";
import MyAdsList from "./components/myAdsList/MyAdsList.js";
import SellerContact from "./components/sellerContact/SellerContact.js";


import './App.css';
function App() {
  const [choice, setChoice] = useState("")

  function handleSelect(choiceChange) {  
    setChoice(choiceChange)
  }
  // console.log(choice)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setChoice={handleSelect} />}></Route>
          <Route path="/login" element={<Login />}></Route> 

          <Route path="/adpage" element={<Adpage />}></Route>
          <Route path="/sellerContact" element={<SellerContact/>}></Route>

          <Route path="/myadslist" element={<MyAdsList/>}></Route>

          <Route path="/catalog" element={<Catalog choice={choice} />}></Route>          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
