import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import CardProduto from '../../components/produtos/cardProdutos/CardProduto'
import Navbar from '../../components/navbar/NavBar';
 

function Carrinho() {
    const { items, limparCart } = useContext(AuthContext)

    return (
        <>
        <Navbar />

        <div className='rounded p-5 text-white-new bg-new-light-orange m-5 w-min-0 h-full justify-center flex align-center text-lg font-bold'>MEU CARRINHO:</div>
        
            <div className='flex justify-end m-2'> 
                <button  className='bg-green hover:bg-green-2 rounded text-white-new pt-1 pr-2 pb-1 pl-2 text-base font-semibold mr-3'
                    onClick={limparCart}>Finalizar Compra </button>
            </div>

            <div className='flex flex-col'>
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                items.map(produto => (
                                    <CardProduto key={produto.id} produto={produto} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </ div >
        </>
    )
}

export default Carrinho