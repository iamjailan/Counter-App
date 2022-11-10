let count = 0

const values = document.querySelector("#values")
const btns = document.querySelectorAll(".btn")
let storingToLocalStorage = localStorage.getItem("count")

if(btns){
    values.textContent = storingToLocalStorage
}

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList;
        if(style.contains("decrease")){
            count--;
        }else if(style.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count < 0){
            values.style.color = "red";
        }
        if(count > 0){
            values.style.color = "lime";
        }
        if(count === 0){
            values.style.color = "blue"
        }
        values.textContent = count;
        storing();
    })
})
let storing = () =>{
        localStorage.setItem("count",count);
}

//This is the Counter App and also i used LocalStorage in this example
