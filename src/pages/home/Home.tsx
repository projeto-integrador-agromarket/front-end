import Carrossel from "../../components/carrossel/Carrossel";
import "./Home.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import CarrosselProdutos from "../../components/carrosselProdutos/CarrosselProdutos";
import img1 from "../../assets/home1.png";
import img2 from "../../assets/home2.png";
import img3 from "../../assets/home3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Carrossel />
      <div className="flex self-center justify-center my-16 font-semibold text-6xl w-full text-dark-orange">
        <p>Confira nossos produtos</p>
      </div>
      <CarrosselProdutos />

      {/* Postagem - inicio */}
      <div className="m-16 p-20 items-center">
        <div className="flex flex-row ">
          <div className="justify-start mr-40">
            <h2 className="self-center justify-center mb-16 font-semibold text-6xl w-full text-dark-orange">
              {" "}
              Nossa missão
            </h2>
            <p className="p-0">
              Empoderar pequenos e médios agricultores, dando-lhes um canal de
              vendas direto para seus clientes. Promover a agricultura
              sustentável, reduzindo o desperdício e fortalecendo comunidades
              rurais. Conectar consumidores a alimentos frescos e de qualidade,
              direto da fonte.
            </p>
            <Link
              to="#"
              className=" max-w-32 mt-8 flex items-center justify-center rounded-md bg-meddium-green px-2 py-2.5 text-center text-sm font-bold text-white-new hover:bg-dark-green-login"
            >
              Saiba mais
            </Link>
          </div>
          <div className="foto flex self-center justify-center">
            <img
              className="flex object-cover size-max max-w-md self-center"
              src={img1}
              alt="product image"
            />
          </div>
        </div>
      </div>
      {/* Postagem - fim */}

      {/* Postagem - inicio */}
      <div className="mx-16 px-20 py-10 items-center">
        <div className="flex flex-row ">
          <div className="foto flex self-center justify-center">
            <img
              className="flex object-cover size-max max-w-md self-center"
              src={img3}
              alt="product image"
            />
          </div>
          <div className="justify-end ml-40">
            <h2 className="self-center justify-center mb-16 font-semibold text-6xl w-full text-dark-orange">
              {" "}
              Seja nosso vendedor
            </h2>
            <p className="p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              quisquam harum, voluptatem amet corporis, exercitationem
              laboriosam optio eius magni pariatur consectetur similique dolore
              provident! Error assumenda neque corrupti consectetur placeat.
            </p>
            <div className="flex justify-end">
              <Link
                to="/cadastro"
                className=" w-2/6 mt-8 flex items-center justify-center rounded-md bg-meddium-green px-2 py-2.5 text-center text-sm font-bold text-white-new hover:bg-dark-green-login "
              >
                Faça o cadastro
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Postagem - fim */}

      {/* Postagem - inicio */}
      <div className="m-16 p-20 items-center">
        <div className="flex flex-row ">
          <div className="justify-start mr-40">
            <h2 className="self-center justify-center mb-16 font-semibold text-6xl w-full text-dark-orange">
              {" "}
              Compre produtos de qualidade
            </h2>
            <p className="p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              quisquam harum, voluptatem amet corporis, exercitationem
              laboriosam optio eius magni pariatur consectetur similique dolore
              provident! Error assumenda neque corrupti consectetur placeat.
            </p>
            <Link
              to="#"
              className=" max-w-32 mt-8 flex items-center justify-center rounded-md bg-meddium-green px-2 py-2.5 text-center text-sm font-bold text-white-new hover:bg-dark-green-login"
            >
              Ver produtos
            </Link>
          </div>
          <div className="foto flex self-center justify-center">
            <img
              className="flex object-cover size-max max-w-md self-center"
              src={img2}
              alt="product image"
            />
          </div>
        </div>
      </div>
      {/* Postagem - fim */}

      <Footer />
    </>
  );
}

export default Home;
