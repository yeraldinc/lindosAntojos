import React from "react";
import { ProductosLista } from "./componentes/productos/index";
import { Header } from "./componentes/Header";
import "boxicons";



function App() {
  return (
    <div className="App">
     <Header/>
     <ProductosLista />
    </div>
  );
}

export default App;
