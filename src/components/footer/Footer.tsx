import logo from "../../assets/footer.png";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import React from "react";

function Footer() {
  return (
    
    <div className="flex justify-center bg-mint-cream text-battleship-gray">
       {<img src={logo} className="h-auto w-20" />}
      <div className="container flex flex-col items-center py-1.5">
        <p className="text-xl font-bold"> 
          NossoPomar | Copyright:{" NossoPomar"}
        </p>
        <p className="text-lg">Acesse nossas redes sociais</p>
        <div className="flex gap-2">
          <LinkedinLogo size={25} weight="bold" />
          <InstagramLogo size={25} weight="bold" />
          <FacebookLogo size={25} weight="bold" />
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
