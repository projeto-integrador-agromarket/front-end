import React from 'react'
import Popup from 'reactjs-popup'
import ExibirProduto from './ExibirProduto'
import './ModalExibirProduto.css';

function ModalExibirProduto() {
  return (
    <>
    <Popup
      trigger={
        <button className="border border-meddium-orange rounded px-4 bg-meddium-orange py-2.5 text-center text-sm items-center font-bold text-white-new hover:bg-dark-orange">
          Ver mais
        </button>
      }
      modal
    >
    <ExibirProduto />
    </Popup>
  </>
  )
}

export default ModalExibirProduto