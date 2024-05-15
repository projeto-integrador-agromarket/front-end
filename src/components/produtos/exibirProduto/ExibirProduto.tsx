import React from 'react'

function ExibirProduto() {
    return (
        <>
            <div className="grid grid-cols-2 gap-1 w-full h-full items-center p-10">
                <div>
                    <a className="relative mx-3 mt-3 flex self-center h-60 overflow-hidden rounded-xl" href="#">
                        <img className="object-cover" src="https://cdn.pixabay.com/photo/2016/03/05/21/47/berry-1239092_1280.jpg" alt="product image" />
                        {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
                    </a>
                </div>
                <div>
                    <div className="mt-4 px-5 pb-5">
                        <a href="#">
                            <h5 className="text-3xl font-semibold tracking-tight text-slate-900">Cereja</h5>
                        </a>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-black-new">R$25</span>
                                {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
                                <span className="text-xl font-bold text-dark-gray"> / unidade</span>
                            </p>
                        </div>

                        <div className="descricao mb-5">
                            <h2 className="text-2xl font-semibold">Sobre o produto</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, architecto tempora debitis dolore impedit sit illum. Odio odit temporibus natus incidunt deleniti voluptatibus, debitis harum, ea porro ullam est aliquam.</p>
                        </div>
                        <div className="mb-5 flex flex-row items-center">
                            <i className="fa fa-calendar-o px-2 text-dark-orange" aria-hidden="true"></i>
                            <p><b>Validade:</b> <span>insira a validade aqui</span></p>
                        </div>
                        <div className="vendedor mb-5 flex flex-row items-center">
                            <i className="fa fa-user px-2 text-dark-orange" aria-hidden="true"></i>
                            <p><b>Vendido por:</b> <span>Nome do vendedor</span></p>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {/* <Link to={`/exibirProduto`}>
                            <button className="flex items-center justify-center rounded-md bg-meddium-orange px-2 py-2.5 text-center text-sm font-bold text-white-new hover:bg-dark-orange focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <i className="fa fa-eye mr-2 -ml-7 w-6 p-0" aria-hidden="true"></i>
                                Ver mais</button>
                        </Link> */}
                            <a href="#" className="flex items-center justify-center rounded-md bg-meddium-green px-2 py-2.5 text-center text-sm font-bold text-white-new hover:bg-dark-green-login focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add Carrinho</a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ExibirProduto