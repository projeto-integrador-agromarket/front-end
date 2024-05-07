import Produto from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  senha: string;
  tipo: string;
  email: string;
  foto: string;
  produto?: Produto | null;
}
