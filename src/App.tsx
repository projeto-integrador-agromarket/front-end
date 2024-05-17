import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListarCategorias from "./components/categorias/listarCategorias/ListarCategoria";
import FormularioCategoria from "./components/categorias/formularioCategorias/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategorias";
import ListarProdutos from "./components/produtos/listarProdutos/ListarProdutos";
import FormularioProduto from "./components/produtos/formularioProdutos/FormularioProduto";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import Cart from "./pages/Cart/Carrinho";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import CardProduto1 from "./components/produtos/cardProdutos/CardProduto1";
import ExibirProduto from "./components/produtos/exibirProduto/ExibirProduto";
import ModalExibirProduto from "./components/produtos/exibirProduto/ModalExibirProduto";
import Contato from "./pages/contato/Contato";
import SobreNos from "./pages/sobrenos/SobreNos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/login1" element={<Login />} />
              <Route
                path="/cadastroCategoria"
                element={<FormularioCategoria />}
              />
              <Route
                path="/editarCategoria/:id"
                element={<FormularioCategoria />}
              />
              <Route
                path="/deletarCategoria/:id"
                element={<DeletarCategoria />}
              />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route
                path="/editarProduto/:id"
                element={<FormularioProduto />}
              />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route
                path="/exibirProduto/:id"
                element={<ModalExibirProduto />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
