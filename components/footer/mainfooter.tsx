import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const MainFooter = () =>{
    return(
        <>
                <section id="Footer" className=" w-screen pt-5 hidden lg:block bg-[#f4ece7]"> 
                <footer className="bg-[#f4ece7]  py-12 text-[#2D2926]">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-row justify-between gap-8">

            <div>
              <h3 className="text-xl font-semibold mb-4">Victoria Galarza</h3>
              <p className="text-[#2D2926]"> Capturando momentos preciosos de la vida con vision artistica y excelente tecnica.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contectemos</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/fragilsosiego/" className="text-[#2D2926] hover:text-[#2D2926]">
                  <FaInstagram className="h-6 w-6" />
                </a>
                {/* <a href="#" className="text-neutral-400 hover:text-white">
                  <FaEnvelope className="h-6 w-6" />
                </a> */}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p className="text-[#2D2926]">+ (56) 9 5514 8483</p> 
            </div>
          </div>
        </div>
        
      </footer>
                </section>
        </>
    )
}

export default MainFooter