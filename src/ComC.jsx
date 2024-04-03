import React from "react";
import { FirstName, LastName, Email, Password} from "./App";

const ComC = ()=>{
  return( <>
       <FirstName.Consumer>
       {(fname)=>{
        return(
            <LastName.Consumer>
                { (lname) =>{
                  return(
                  <Email.Consumer>
                  {(email)=>{
                    return (
                      <Password.Consumer>
                         {(password)=>{
                          return <h1>Hello {fname} {lname} {email} {password}</h1>
                         }}
                      </Password.Consumer>
                    )
                   
                  }}
                  </Email.Consumer>
                  )
                }}
            </LastName.Consumer>
        )
         
       }}
       </FirstName.Consumer>
  </>);

};
export default ComC;