import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AboutUs from "./pages/aboutus/AboutUs";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListarCategorias from "./components/categorias/listarCategorias/ListarCategoria";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";

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
              <Route path="/categoria" element={<ListarCategorias />} />
              <Route
                path="/cadastroCategoria"
                element={<FormularioCategoria />}
              />
              <Route path="/editarCategoria/:id" element={<FormularioTema />} />
              <Route path="/deletarCategoria/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
