import Carousel from "../../components/carousel/Carousel";
import "./Home.css";

function Home() {
  return (
    <>
    <Carousel/>
      <div className="bg-red-400 flex justify-center ">
        <div className="container text-white ">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
          </div>
          <div className="flex justify-center "></div>
        </div>
      </div>
    </>
  );
}

export default Home;
