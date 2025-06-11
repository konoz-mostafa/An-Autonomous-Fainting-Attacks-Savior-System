import AssignPatient from "./AssignPatient";

export default function Par() {
     
    return(
      <div>
      <div className="headtext">
            <h1 >Hospital🏥</h1>
        </div>
      <div  className="dodo">
        <div style={{fontSize:"30px", color:"#c95165",padding:"100 px", border:"solid #176b87 5px" , margin:"30px" , width:"25%" , height:"400px",borderRadius:"10px",boxShadow:"0px 5px 13px rgb(185,182,182)"}}>
            <h2>assign patient</h2>
            <br/> <br/> <br/>
            <button className="button">assign</button>
      </div>
      <div style={{fontSize:"30px", color:"#c95165",padding:"100 px", border:"solid #176b87  5px" , margin:"30px" , width:"25%" , height:"400px",borderRadius:"10px",boxShadow:"0px 5px 13px rgb(185,182,182)"}}>
            <h2>view all hospitals and ambulances</h2>
            <br/>  
            <button className="button">view</button>
            
      </div>
      <div style={{fontSize:"30px", color:"#c95165",padding:"100 px", border:"solid #176b87 5px" , margin:"30px" , width:"25%" , height:"400px",borderRadius:"10px",boxShadow:"0px 5px 13px rgb(185,182,182)"}}>
            <h2> All Patients' Reports </h2>
            <br/> <br/> 
            <button className="button">show</button>
      </div>
      
      </div>
    </div> 
    ) 
}

//style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"  الصفحه 
//style={{padding: "10px 20px",fontSize:"33px", backgroundColor:"rgb(249, 110, 42)" , color:"whitesmoke",textShadow:"2px 2px 10px rgb(249, 110, 42)",border: "none", borderRadius:"5px",cursor: "pointer"}} buttom style