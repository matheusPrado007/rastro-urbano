import React, { useState, useEffect } from 'react';
import '../styles/PopUp.css'; 

const Popup = ({ message, onClose }: any) => {
  const [messageErro, setMessageErro] = useState(false)
  useEffect(() => {
    if(message === "Erro ao Adicionar Dados" || message === "Erro ao Atualizar Dados") {
      setMessageErro(true)
    }
    const timeout = setTimeout(() => {
      onClose();
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [onClose]);


  return (
    <div className={messageErro ? 'popup-erro' : "popup"}>
      <p className='message-popup'>{message}</p>
    </div>
  );
};

export default Popup;
