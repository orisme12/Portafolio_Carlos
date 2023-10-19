import { createContext } from "react"; // Para crear el contexto global 
import { useContext } from 'react' // Es para usar el contexto 
import { useState,useEffect } from "react"; // HOOK DE ESTADO 
import { useNavigate } from "react-router-dom"; // Para navegar 


export const context = createContext();  // Craer contexto 
export const useAuth = () => {
    const context = useContext(context);
    if (!context) throw new Error("there is no auth provider");
    return context;
};


export  function AuthContext({children}) {
    const navigate = useNavigate();
  return (
    <context.Provider value={{}}> 
        {children}
    </context.Provider>
  )
}
