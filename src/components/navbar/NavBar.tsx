import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logoEditado.png";
import { ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const { quantidadeItems } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  let navbarComponent;

  if (usuario.token !== "" && usuario.tipo === "cliente") {
    navbarComponent = (
      <div>
        <div className="w-full bg-meddium-orange text-white-new flex justify-center py-4 items-center gap-4">
          <div className="container flex justify-between text-lg items-center">
            <div className="text-2xl font-bold uppercase flex items-center">
              <h1>
                Nosso <span className="">Pomar</span>
              </h1>
            </div>

            <div className="mb-0 grow mx-20">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative text-white-new m-0 block flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary"
                  placeholder="Busque produtos aqui"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

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

            <div className="flex gap-4">
              <Link to="/home" className="hover:text-light-orange">
                Home
              </Link>
              <Link to="/produtos" className="hover:text-light-orange">
                Produtos
              </Link>
              <Link to="/contato" className="hover:text-light-orange">
                Contato
              </Link>
              <Link to="/sobre" className="hover:text-light-orange">
                Sobre nós
              </Link>
              <Link to="" onClick={logout} className="hover:underline">
                Sair
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-light-orange text-white-new flex justify-center py-1">
          <div className="container flex justify-between text-lg items-left flex-row-reverse shadow-2xl">
            <div className="flex gap-4">
              <Link to="/cart" className="hover:underline">
                <div className="text-base flex items-center	justify-center pb-1 pr-1 pb-1 pl-1 cursor-pointer	relative	ml-20">
                  <ShoppingCart size={30} />
                  <div className="bg-red pr-1.5 pl-1.5 w-15 h-15 absolute top-4 left-7 font-semibold text-xs	 rounded-full flex items-center	">
                    {quantidadeItems}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (usuario.token !== "" && usuario.tipo === "vendedor") {
    navbarComponent = (
      <div>
        <div className="w-full bg-meddium-orange text-white-new flex justify-center py-4 items-center gap-4">
          <div className="container flex justify-between text-lg items-center">
            <div className="text-2xl font-bold uppercase flex items-center">
              <h1>
                Nosso <span className="">Pomar</span>
              </h1>
            </div>

            <div className="mb-0 grow mx-20">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative text-white-new m-0 block flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary"
                  placeholder="Busque produtos aqui"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

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

            <div className="flex gap-4">
              <Link to="/home" className="hover:text-light-orange">
                Home
              </Link>
              <Link to="/produtos" className="hover:text-light-orange">
                Produtos
              </Link>
              <Link to="/contato" className="hover:text-light-orange">
                Contato
              </Link>
              <Link to="/sobre" className="hover:text-light-orange">
                Sobre nós
              </Link>
              <Link to="" onClick={logout} className="hover:underline">
                Sair
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-light-orange text-white-new flex justify-center py-1">
          <div className="container flex justify-between text-lg items-left flex-row-reverse shadow-2xl">
            <div className="flex gap-4">
              <Link to="/cart" className="hover:underline">
                <div className="text-base flex items-center	justify-center pb-1 pr-1 pb-1 pl-1 cursor-pointer	relative	ml-20">
                  <ShoppingCart size={30} />
                  <div className="bg-red pr-1.5 pl-1.5 w-15 h-15 absolute top-4 left-7 font-semibold text-xs	 rounded-full flex items-center	">
                    {quantidadeItems}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (usuario.token !== "") {
    navbarComponent = (
      <div>
        <div className="w-full bg-meddium-orange text-white-new flex justify-center py-4 items-center gap-4">
          <div className="container flex justify-between text-lg items-center">
            <div className="text-2xl font-bold uppercase flex items-center">
              <h1>
                Nosso <span className="">Pomar</span>
              </h1>
            </div>

            <div className="mb-0 grow mx-20">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative text-white-new m-0 block flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary"
                  placeholder="Busque produtos aqui"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

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

            <div className="flex gap-4">
              <Link to="/home" className="hover:text-light-orange">
                Home
              </Link>
              <Link to="/categorias" className="hover:text-light-orange">
                Categorias
              </Link>
              <Link to="/cadastroCategoria" className="hover:text-light-orange">
                Cadastrar Categorias
              </Link>
              <Link to="/produtos" className="hover:text-light-orange">
                Produtos
              </Link>
              <Link to="" onClick={logout} className="hover:underline">
                Sair
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-light-orange text-white-new flex justify-center py-1">
          <div className="container flex justify-between text-lg items-left flex-row-reverse shadow-2xl">
            <div className="flex gap-4">
              <Link to="/cart" className="hover:underline">
                <div className="text-base flex items-center	justify-center pb-1 pr-1 pb-1 pl-1 cursor-pointer	relative	ml-20">
                  <ShoppingCart size={30} />
                  <div className="bg-red pr-1.5 pl-1.5 w-15 h-15 absolute top-4 left-7 font-semibold text-xs	 rounded-full flex items-center	">
                    {quantidadeItems}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    navbarComponent = (
      <div>
        <div className="w-full bg-meddium-orange text-white-new flex justify-center py-4 items-center gap-4">
          <div className="container flex justify-between text-lg items-center">
            <div className="text-2xl font-bold uppercase flex items-center">
              <h1>
                Nosso <span className="">Pomar</span>
              </h1>
            </div>

            <div className="flex gap-4">
              <Link to="/home" className="hover:text-light-orange">
                Home
              </Link>
              <Link to="/contato" className="hover:text-light-orange">
                Contato
              </Link>
              <Link to="/sobre" className="hover:text-light-orange">
                Sobre nós
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-light-orange text-white-new flex justify-center py-1">
          <div className="container flex justify-between text-lg items-left flex-row-reverse shadow-2xl">
            <div className="flex gap-4">
              <Link to="/login" className="hover:text-dark-orange">
                Login
              </Link>
              <Link to="/cadastro" className=" hover:text-dark-orange">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
