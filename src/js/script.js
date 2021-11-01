const choice = document.querySelectorAll(".sa_list_choice p");
const colors = document.querySelectorAll(".sa_list_colors div");
const purple = document.querySelectorAll(".purple");
const yellow = document.querySelectorAll(".yellow");
const grey = document.querySelectorAll(".grey");
for(let i = 0; i < choice.length; i++){
    choice[i].onclick = () => {
        if(i == 1){
            for(let x = 0; x < colors.length; x++){
                if(colors[x].classList.contains("purple")){
                    for(let j = 0; j < purple.length; j++){
                        purple[j].classList.remove("hide");
                        purple[j].classList.add("active");
                    }
                }
                else{
                    for(let j = 0; j < yellow.length; j++){
                        yellow[j].classList.add("hide");
                    }
                    for(let g = 0; g < grey.length; g++){
                        grey[g].classList.add("hide");
                    }
                }
            }
        }
        else if(i == 2){
            for(let x = 0; x < colors.length; x++){
                if(colors[x].classList.contains("yellow")){
                    for(let j = 0; j < yellow.length; j++){
                        yellow[j].classList.remove("hide");
                        yellow[j].classList.add("active");
                    }
                }
                else{
                    for(let j = 0; j < purple.length; j++){
                        purple[j].classList.add("hide");
                    }
                    for(let g = 0; g < grey.length; g++){
                        grey[g].classList.add("hide");
                    }
                }
            }
        }
        else if(i == 3){
            for(let x = 0; x < colors.length; x++){
                if(colors[x].classList.contains("grey")){
                    for(let j = 0; j < grey.length; j++){
                        grey[j].classList.remove("hide");
                        grey[j].classList.add("active");
                    }
                }
                else{
                    for(let j = 0; j < yellow.length; j++){
                        yellow[j].classList.add("hide");
                    }
                    for(let g = 0; g < purple.length; g++){
                        purple[g].classList.add("hide");
                    }
                }
            }
        }
        else{
            for(let x = 0; x < colors.length; x++){
                colors[x].classList.remove("hide");
            }
        }
    }
}
const btnForm = document.querySelector(".button");
const input = document.querySelectorAll(".input_box");
const alert = document.querySelector(".sa_alert");
btnForm.onclick = (e) => {
    
    for(let i = 0; i < input.length; i++){
        if(input[i].value == ""){
            e.preventDefault();
            input[i].classList.add("alert")
            alert.classList.remove("hide");
        }
        else{
            input[i].classList.remove("alert")
            alert.classList.add("hide");
        }
    }
}