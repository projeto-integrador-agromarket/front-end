import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  validade: string;
  foto: string;
  descricao: string;
  quantidade: number;
  preco: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
