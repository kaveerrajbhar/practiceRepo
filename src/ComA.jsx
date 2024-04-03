import React, { useContext } from 'react';
import { FirstName, LastName, Email, Password} from "./App";



const ComA = () =>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    const email = useContext(Email);
    const password=useContext(Password);
        return <>
            <h1>my name is {fname} {lname} {email} {password}</h1>
            </>
}
export default ComA;