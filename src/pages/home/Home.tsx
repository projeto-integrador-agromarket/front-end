import Carrossel from "../../components/carrossel/Carrossel";
import "./Home.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Carrossel />
      <div className="bg-red-400 flex justify-center ">
        <div className="container text-white ">
          <div className="flex flex-col gap-4 items-center justify-center py-64"></div>
          <div className="flex justify-center "></div>
        </div>
      </div>
    </>
  );
}

export default Home;
