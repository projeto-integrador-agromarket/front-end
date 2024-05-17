import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";

function Contato() {
  return (
    <>
      <NavBar />
      <div>
        <div className="mapa p-10 flex">
          <iframe
            className="w-full h-80 justify-self-center"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.2137061271683!2d-46.637713!3d-23.560767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a5bff1d98b%3A0xba99ce77224a3a99!2sAv.%20da%20Liberdade%2C%20899%20-%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001503-001!5e0!3m2!1spt-BR!2sbr!4v1701488595521!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-3">
        <div className="flex self-center justify-center my-16 font-semibold text-6xl w-full text-dark-blue-footer">
          <p>Ficou alguma dúvida? Entre em contato</p>
        </div>
        <div className="flex flex-row">
          <div className="endereco bg-timber-wolf mx-10 size-72">
            <p>Endereco</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-sand-orange w-full max-w-5xl">
            <p>Formulário de contato</p>
            <form className="flex flex-wrap p-10 justify-self-center">
              <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Email"
              />
              <input
                type="number"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Company Name"
              />
              <input
                type="text"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                placeholder="Job Title"
              />
              <input
                type="date"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                placeholder="Date of Birth"
              />
              <textarea
                name="message"
                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contato;
