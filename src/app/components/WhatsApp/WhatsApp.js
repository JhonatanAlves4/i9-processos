// components/WhatsAppButton.js

import React from "react";
import "./WhatsApp.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5548988143504?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20a%20I9%20TI%20Solutions."
      className="whatsappButton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
