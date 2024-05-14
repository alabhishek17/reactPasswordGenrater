import style from "./css_header.module.css"
import { useState } from "react";
import usePasswordGenerater from "../hook/usepassword"
function Index() {
    const[length,setLength]=useState(4);
    const[checkboxData,setCheckboxData]=useState([
        {title:"uppercase Letter", state:false},
        {title:"lowercase Letter",state:false},
        {title:"Number",state:false},
        {title:"Symbols",state:false}
    ]);
    
    const[copied,setCopied]=useState(false)   

    const handleCheckbox=(index)=>{
        const updatedcheckboxData=[...checkboxData]
        updatedcheckboxData[index].state= !updatedcheckboxData[index].state
        setCheckboxData(updatedcheckboxData);
    }
     
    function handleCopy(){
        navigator.clipboard.writeText(password)
        setCopied(true);

        setTimeout(()=>{
            setCopied(false);
        },1000);
    }
    

    const{password,error,generatePassword}=usePasswordGenerater()
    return (
        <div>
           {password &&( <header>
                <div className={style.title} >{password}</div>
                <button className={style.copyBtn} onClick={handleCopy}>{copied ? "copied":"copy"}</button>
            </header>)}

            <div className={style.charLength}>
                <span>
                    <label>Character Length</label>
                    <label>{length}</label>

                </span>
                <input type="range" min="4" max="20" value={length} onChange={(e)=>setLength(e.target.value)}/>
            </div>
          
          <div className={style.checkbox}>
            {
                checkboxData.map((iteam,index)=>(
                    <div key={index}>
                    <input type="checkbox" onChange={()=>handleCheckbox(index)} checked={iteam.state} />
                    <label>{iteam.title}</label>
                    </div>
                ))
            }
          </div>
          { error && <div>{error}</div>}
                 <button className={style.genertBtn} onClick={()=>generatePassword(checkboxData,length)}>genert button</button>
        </div>

    )
}
export default Index;