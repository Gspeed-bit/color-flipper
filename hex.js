const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn")
const change = document.querySelector(".color")

const randomNumber = ()=> {
    return Math.floor(Math.random()* hex.length)

}


btn.addEventListener("click", function(){
    

    let hexa = "#"
    for(let i = 0; i < 6; i++){
        hexa += hex[randomNumber()]
    }
    
    change.textContent = hexa
    document.body.style.backgroundColor = hexa

})




       



