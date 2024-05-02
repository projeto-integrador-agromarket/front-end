import React from "react";
import logo from "../../assets/logoEditado.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-red-400 flex justify-center ">
        <div className="container text-white ">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <div className="text-center">
              <h2 className="text-5xl font-bold ">
                Sejam bem vindes ao NossoPomar!
              </h2>
            </div>
          </div>

          <div className="flex justify-center "></div>
        </div>
      </div>
    </>
  );
}

export default Home;
