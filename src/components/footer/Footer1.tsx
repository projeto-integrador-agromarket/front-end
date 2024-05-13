import { Copyright } from "@phosphor-icons/react"


function Footer1() {
  return (
    <>
        <div className="p-10 bg-dark-blue-footer text-light-gray-footer">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="mb-5">
                    {/* <h4 className="text-2xl pb-4">Logo</h4> */}
                    <img src=""></img>
                        <p className="text-light-gray-footer">
                        Endereco<br/>
                        bairro <br/>
                        País<br/><br/>
                        <b>Celular</b><br/>
                        <b>Email</b>
                        </p>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-4">Links uteis</h4>
                        <ul className="text-meddium-gray-footer">
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Home</a></li>
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Sobre nós</a></li>
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Servicos</a></li>
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Seja voluntario</a></li>
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Politica dde privacidade</a></li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-4">Nossos servicos</h4>
                        <ul className="text-meddium-gray-footer">
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Lojas Virtuais</a></li>
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Produtos</a></li>
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Categorias</a></li>
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Marketplace</a></li>
                            <li className="pb-4"> <i className="fa fa-chevron-right text-meddium-orange"></i><a href="#" className="hover:text-meddium-orange"> Não sei</a></li>
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h4 className="pb-4">Se inscreva para receber novidades!</h4>
                        <p className="text-meddium-gray-footer">Seja também um vendedor na nossa loja<br/></p>
                        <form className="flex flex-row flex-wrap">
                            <input type="text" className="text-meddium-gray-footer w-2/3 p-2 focus:border-meddium-orange" placeholder="email@exemplo.com" name="" id=""></input>
                            <button className="p-2 w-1/3 bg-meddium-orange text-white-new hover:bg-dark-orange">Se inscrever</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-dark-gray-footer text-meddium-gray-footer px-10">
            <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                <div className="text-center">
                    <div>
                        <p>Copyright ©️ 2024 <b>Nosso pomar</b> Todos os direitos reservados</p> 
                    </div>
                    <div>
                        <p>Feito com amor pelo <span className="text-meddium-orange"> Grupo 4</span> </p>
                    </div>
                </div>
                <div className="text-center text-xl text-white-new mb-2">
                    <a href="#" className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"><i className="fa fa-facebook"></i></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"><i className="fa fa-instagram"></i></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"><i className="fa fa-twitter"></i></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"><i className="fa fa-linkedin"></i></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"><i className="fa fa-skype"></i></a>

                </div>
            </div>

        </div>
    
    
    
    
    </>
  )
}

export default Footer1