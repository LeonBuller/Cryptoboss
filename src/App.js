import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./context/routes/Home";
import SignIn from "./context/routes/SignIn";
import SignUp from "./context/routes/SignUp";
import Account from "./context/routes/Account";
import axios from "axios";
import CoinPage from "./context/routes/CoinPage";
import Footer from "./components/Footer";

function App() {
  const [coins, setcoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setcoins(response.data);
      //console.log(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

// Stopped at 01:49:58
