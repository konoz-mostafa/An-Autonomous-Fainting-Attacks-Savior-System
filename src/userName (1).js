import { useState } from "react";

export default function UserNameLabel(){
    const[inputs,setInputs]=useState({
        username:"",
       
      })
return(
<div>
<label>Username</label>
<input 
type='text'
placeholder="Enter Username"
required
value={inputs.username} onChange={(event)=>{
  setInputs({...inputs,username:event.target.value})
}}>
</input>
</div>
);
}