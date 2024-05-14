import { useState } from "react";

function usePasswordGenerater(){
const[password,setPassword]=useState("");
const[error,setError]=useState("");

const generatePassword=(checkboxData,length)=>{
    let charset="",
    generatedPassword=" ";

    const selectedOption=checkboxData.filter((checkbox)=>checkbox.state)

if (selectedOption===0){
    setError("select any one option in below");
    setPassword("");
    return
}

    selectedOption.forEach((option) => {
        switch(option.title){
            case "uppercase Letter":
            charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
            case "lowercase Letter":
                charset+="abhisheklmnopqrstuvwxyz";
                break;
                case "Number":
                    charset+="0123456789";
                    break;
                    case "Symbols":
                        charset+="!@#$%^&*()";
                        break;
                        default:
                            break;
        }

        
    });

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*charset.length);
        generatedPassword+=charset[randomIndex];
    }
    setPassword(generatedPassword);
    setError("");
};

return{password ,error,generatePassword}

}
export default usePasswordGenerater;