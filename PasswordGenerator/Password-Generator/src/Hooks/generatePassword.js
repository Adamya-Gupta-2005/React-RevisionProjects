import { useState } from "react";

function useGeneratePassword() {
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const generate = (checkbox, length) => {
        let charSet ="", generatedPass = "";

        const selectedChecks = checkbox.filter((box) => box.State)

        if(selectedChecks.length === 0) {
            setErrorMsg("Select an option")
            setPassword("")
            return;
        }

        selectedChecks.forEach( (check) => {
            switch (check.title) {
                case "Add UpperCase" :
                    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break;
                case "Add LowerCase" :
                    charSet += 'abcdefghijklmnopqrstuvwxyz'
                    break;
                case "Add Numbers" :
                    charSet += '1234567890'
                    break;
                case "Add Symbols" :
                    charSet += '!@#$%^&*()'
                    break
                default : 
                    break;
            }
        });

        for(let i = 0 ;i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length)
            generatedPass += charSet[randomIndex];
        }

        setPassword(generatedPass)
        setErrorMsg("")
    }
    return {password, errorMsg, generate}
}

export default useGeneratePassword