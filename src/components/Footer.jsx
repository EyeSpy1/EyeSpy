import React from "react";
import Section from "./Section";


const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container items-center text-center gap-10 max-sm:flex-col">
        <p className="caption text-n-3">
          Wakefulness, redefined with love 🤍</p>
        
        <p className="caption text-n-4">© EyeSpy {new Date().getFullYear()} All rights reserved.</p>
    

        
      </div>
    </Section>
  );
};

export default Footer;
