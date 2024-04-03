import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();
const Email = createContext();
const Password = createContext();
const App = () => {
 
  return (
    <>
       <FirstName.Provider value={"kabir"}>
        <LastName.Provider value={"rajbhar"}>
         <Email.Provider value={"kaveerrajbar395@gmail.com"}>
           <Password.Provider value={"kaveer@123"}>
           <ComA/>
           </Password.Provider>
         </Email.Provider>
        </LastName.Provider>
       </FirstName.Provider>
    </>
  );
}
export default App;
export  {FirstName,LastName,Email,Password};
        





