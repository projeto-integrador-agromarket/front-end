import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function CartShopping() {
  const { quantidadeItems, items, limparCart } = useContext(AuthContext);
  const precoTotal = items.reduce((acc, produto) => {
    return produto.preco + acc;
  }, 0);

  return (
    <div className="border-slate-900 shadow-md bg-white-gray border-solid border flex flex-col rounded overflow-hidden justify-between w-screen max-w-xl">
      <div>
        <div className="flex w-full items-center gap-4"></div>
        <div className="">
          <h4 className="text-lg font-bold bg-new-dark-gray text-white-new flex align-center justify-center p-1 uppercase">
            <h1>RESUMO DA COMPRA</h1>
          </h4>
          <hr className="text-gray" />
          <p className="text-battleship-gray text-normal p-2">
            {" "}
            <h1>PRODUTOS: {quantidadeItems} </h1>{" "}
          </p>
          <div className=" flex font-semibold text-lg h-1/4 flex right-0 pb-0 mb-0 bottom-0 align-center p-2 text-new-dark-gray">
            <h1>TOTAL: R${precoTotal},00</h1>
            <div className=" align-center justify-center mt-12 ml-96 mb-2 mr-12 bg-green hover:bg-new-green px-2 text-white-new rounded">
              <button onClick={limparCart}>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartShopping;
