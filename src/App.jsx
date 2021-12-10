import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import MainHeader from "./components/MainHeader";
import CharacterTable from "./pages/CharacterTable";
import CharacterCard from "./pages/CharacterCard";
import DetallesMaestro from "./pages/DetallesMaestro";
import MyFooter from "./components/MyFooter";
import CrudAdd from "./pages/CrudAdd";
import CrudRead from "./pages/CrudRead";
import CrudEdit from "./pages/CrudEdit";
import PageNew from "./pages/PageNew";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/service-table" element={<CharacterCard />} />
        <Route path="/service-card" element={<CharacterTable />} />
        <Route path="/detalles-maestro" element={<DetallesMaestro />} />
        <Route path="/crud" element={<CrudAdd />} />
        <Route path="/crud-read" element={<CrudRead />} />
        <Route path="/crud-editar/:id" element={<CrudEdit />} />
        <Route path="/service" element={<PageNew />} />
      </Routes>

      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
