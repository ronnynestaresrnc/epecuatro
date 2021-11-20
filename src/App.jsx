import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import MainHeader from "./components/MainHeader";
import CharacterTable from "./pages/CharacterTable";
import CharacterCard from "./pages/CharacterCard";
import MyFooter from "./components/MyFooter";
function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/service-table" element={<CharacterCard />} />
        <Route path="/service-card" element={<CharacterTable />} />
      </Routes>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
