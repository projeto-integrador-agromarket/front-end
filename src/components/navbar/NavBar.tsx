import { Link } from "react-router-dom";
import logo from "../src/assets/logoEditado.png";
import {ShoppingCart} from "@phosphor-icons/react";

function Navbar() {
  return (
    <>
      {/* <!--PRIMEIRO MENU--> */}
      <div className="w-full bg-meddium-orange text-white-new flex justify-center py-4 items-center gap-4">
        <div className="container flex justify-between text-lg items-center">
          <div className="text-2xl font-bold uppercase flex items-center">
            {<img src={logo} className="h-20 w-15" />}
            <h1>Nosso Pomar</h1>
          </div>
          {/* <!--Barra de pesquisa--> */}
          <div className="mb-0 grow mx-20">
            <div className="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 block flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Busque produtos aqui"
                aria-label="Search"
                aria-describedby="button-addon2"/>

              {/* <!--Pesquisar icon--> */}
              <span
                className="input-group-text flex items-center whitespace-nowrap rounded-r px-4 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 bg-dark-orange"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* <!--Fim Barra de pesquisa--> */}
          <div className="flex gap-4">
            <Link to="/home" className="hover:text-light-orange">
              Home
            </Link>
            <Link to="/categorias" className="hover:text-light-orange">
              Categorias
            </Link>
            <div className="hover:text-light-orange">Produtos</div>
            <div className="hover:text-light-orange">Sair</div>
          </div>
        </div>
      </div>
      {/* <!--FIM PRIMEIRO MENU--> */}

      {/* <!--SEGUNDO MENU--> */}
      <div className="w-full bg-light-orange text-white-new flex justify-center py-1">
        <div className="container flex justify-between text-lg items-left flex-row-reverse">
          <div className="flex gap-4">
            <Link to="/" className="hover:underline">
              Login
            </Link>
            <p>|</p>
            <Link to="/cadastro" className="hover:underline">
              Cadastre-se
            </Link>
            <p>|</p>
            <Link to="/login" className="hover:underline">
            <div className="flex gap-2">
            <ShoppingCart size={29} />
        
        </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <!--FIM SEGUNDO MENU--> */}

    </>
  );
}

export default Navbar;
