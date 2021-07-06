import React from "react";
import "./forminput.styles.scss";



const FormInput=({type,lablename,name})=>{
    return(
        <div className="input-field">
             
                    <label>{lablename}:</label>
                    <input className="input-field-style"  type={type} name={name}/><br/>
                    
                
        </div>
    )
}

export default FormInput;