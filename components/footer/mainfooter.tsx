import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const MainFooter = () =>{
    return(
        <>
                <section id="Footer" className="hidden lg:block"> 
                <footer className="  py-12 ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-row justify-between gap-8">

            <div>
              <h3 className="text-xl font-semibold mb-4">Victoria Galarza</h3>
              <p className=""> Capturando momentos preciosos de la vida con vision artistica y excelente tecnica.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contectemos</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/fragilsosiego/" className="">
                  <FaInstagram className="h-6 w-6" />
                </a>
                {/* <a href="#" className="text-neutral-400 hover:text-white">
                  <FaEnvelope className="h-6 w-6" />
                </a> */}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p className="">+ (56) 9 5514 8483</p> 
            </div>
          </div>
        </div>
        
      </footer>
                </section>
        </>
    )
}

export default MainFooter