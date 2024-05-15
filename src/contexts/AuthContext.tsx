import { createContext, ReactNode, useState } from "react";

import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import Produto from "../models/Produto";
import { toastAlerta } from "../util/toastAlerta"

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
  adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

 
 const [items, setItems] = useState<Produto[]>([])

 const quantidadeItems = items.length

 // Função p/ adicionar produto ao carrinho
 function adicionarProduto(produto: Produto) {
     setItems(state => [...state, produto])
 }

//remove produtos do carrinho
 function removerProduto(produtoId: number) {

    
     const indice = items.findIndex(items => items.id === produtoId) 
     let novoCart = [...items]  

     
     if(indice >= 0){
         novoCart.splice(indice, 1)
         setItems(novoCart)  // Atualiza o Carrinho
     }
 }

 function limparCart() {
  toastAlerta('Compra efetuada com sucesso', 'sucesso')
     setItems([])
 }

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      toastAlerta('Você precisa estar logado', 'info');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toastAlerta('Você precisa estar logado', 'info');
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      email: "",
      senha: "",
      foto: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading, adicionarProduto, removerProduto, limparCart, items, quantidadeItems}}
    >
      {children}
    </AuthContext.Provider>
  );
}
