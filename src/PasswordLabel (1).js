import { useState } from "react";
import "./login (1).css";

export default function PasswordLabel(){
    const[inputs,setInputs]=useState({
        password:"",
       
      })
      return(
        <div>
        <label>Password</label>
        <input 
        type='password'
        placeholder="Enter password"
        required
        value={inputs.password} onChange={(event)=>{
          setInputs({...inputs,password:event.target.value})
        }}>
        </input>
        </div>
      );
    }