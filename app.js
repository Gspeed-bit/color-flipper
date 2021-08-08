const colors = ["green","blue","olive ","hotpink","chocolate", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const change = document.querySelector(".color")

// functions that gives a random position
const randomNumber =()=>{
    return Math.floor(Math.random()*8);
};

// what the botton does immediately you press the button
btn.addEventListener("click", function(){

    const random = randomNumber();

document.body.style.backgroundColor= colors[random]

//this changes the inner text of the span that has the class color in the html
    change.textContent = colors[random]
}); 