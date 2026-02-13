
function showPassword(){
        const input = document.getElementById("senha")
        const olho = document.getElementById("eye")
        
        if (input.type === "password"){
            input.type = "text"
            
            olho.classList= "fas fa-eye-slash"
        }else {
            input.type = "password"
            
            olho.classList="fas fa-eye"
        }


    }
