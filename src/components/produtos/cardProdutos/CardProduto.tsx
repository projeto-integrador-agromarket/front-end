import React from "react";
import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

/*export default interface Produto {
  id: number;
  nome: string;
  validade: Date;
  foto: string;
  descricao: string;
  quantidade: number;
  preco: number;
  categoria: Categoria | null;
} */

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4"></div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">
            Produto: {produto.nome}
          </h4>
          <p>Sobre o produto: {produto.descricao}</p>
          <span>Foto:</span>
          <img src={produto.foto} className="h-12 rounded-full" alt="" />
          <p>Quantidade: {produto.quantidade}</p>
          <p>Preço: R$:{produto.preco}</p>
          <p>
            Data de validade:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(produto.validade))}
          </p>
          <img
            src={produto.usuario?.foto}
            className="h-12 rounded-full"
            alt=""
          />
          <p>Vendedor: </p>
          <h3 className="text-lg font-bold text-center uppercase ">
            {produto.usuario?.nome}
          </h3>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarProduto/${produto.id}`}
          className="w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarProduto/${produto.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
