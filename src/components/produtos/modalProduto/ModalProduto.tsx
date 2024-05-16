import React from "react";
import FormularioProduto from "../formularioProdutos/FormularioProduto";

import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

import "./ModalProduto.css";

function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
          <button className="rounded px-6 py-3 text-white-new">
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
