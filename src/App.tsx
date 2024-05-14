import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AboutUs from "./pages/aboutus/AboutUs";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import Footer1 from "./components/footer/Footer1";
import ListarCategorias from "./components/categorias/listarCategorias/ListarCategoria";
import FormularioCategoria from "./components/categorias/formularioCategorias/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarCategorias/DeletarCategorias";
import ListarProdutos from "./components/produtos/listarProdutos/ListarProdutos";
import FormularioProduto from "./components/produtos/formularioProdutos/FormularioProduto";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
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
            </Routes>
          </div>
          <Footer1 />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
