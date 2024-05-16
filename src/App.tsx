import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AboutUs from "./pages/aboutus/AboutUs";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListarCategorias from "./components/categorias/listarCategorias/ListarCategoria";
import FormularioCategoria from "./components/categorias/formularioCategorias/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategorias";
import Login1 from "./pages/login/Login1";
import ListarProdutos from "./components/produtos/listarProdutos/ListarProdutos";
import FormularioProduto from "./components/produtos/formularioProdutos/FormularioProduto";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import Cart from "./pages/Cart/Carrinho";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login1 />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/categorias" element={<ListarCategorias />} />
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
              <Route path="/sobre" element={<AboutUs />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
