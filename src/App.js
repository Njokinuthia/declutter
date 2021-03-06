import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";
import Home from "./components/home/Home.js"
import Login from "./components/login/Login.js";
import Adpage from "./components/adpage/Adpage.js";
import Catalog from "./components/catalog/Catalog.js";
import MyAdsList from "./components/myAdsList/MyAdsList.js";
import SellerContact from "./components/sellerContact/SellerContact.js";
import { UserContext } from "./Contexts/UserContext.js";

import './App.css';
function App() {
  const [choice, setChoice] = useState(null)
  const [myAccount, setMyAccount] = useState({})
  const[id,setId]=useState(0)

  function handleSelect(choiceChange) {
    setChoice(choiceChange)
  }

  function getUserData(data) {   
    setMyAccount(data)
  }

  function getIdForAd(id) {
    setId(id)
  } 

  // console.log(myAccount)
  // console.log(myAccount.id)

  return (
    <>
      <BrowserRouter>
        <Routes>          
          <Route path="/" element={<Home setChoice={handleSelect} />}></Route>
          <Route path="/login" element={<Login getUserData={getUserData} />}></Route>
          <Route path="/adpage" element={<Adpage myAccount={myAccount} getIdForAd={getIdForAd} />}></Route>
          <Route path="/sellerContact" element={<SellerContact />}></Route>
          <Route path="/myadslist" element={<MyAdsList myAccount={myAccount}/>}></Route>
          <Route path="/catalog" element={<Catalog choice={choice} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
