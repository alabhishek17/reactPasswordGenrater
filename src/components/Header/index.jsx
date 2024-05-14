import style from "./css_header.module.css"
import { useState } from "react";

function Index() {
    const[length,setLength]=useState(4);
    const checkboxData=[
        {title:"uppercase Letter", state:false},
        {title:"lowercase Letter",state:false},
        {title:"Number",state:false},
        {title:"Symbols",state:false}
    ];
    
    return (
        <div>
            <header>
                <div className={style.title} >dgsogyogh</div>
                <button className={style.copyBtn}>copy</button>
            </header>

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
                    <input type="checkbox" checked={iteam.state} />
                    <label>{iteam.title}</label>
                    </div>
                ))
            }
          </div>
                 <button className={style.genertBtn}>genert button</button>
        </div>

    )
}
export default Index;