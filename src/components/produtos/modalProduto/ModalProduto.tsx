import React from "react";
import FormularioProduto from "../formularioProdutos/FormularioProduto";
import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";


import "./ModalProduto.css";

function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 hover:bg-white hover:text-indigo-800">
            Novo Produto
          </button>
        }
        modal
      >
        <div>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;
