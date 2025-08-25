
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;  // Use `let` or `var` to declare and later reassign

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],  // Corrected winning combination
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];

const resetGame =()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { // Prevent overwriting
            if (turn0) {
                box.innerText = "O";
                turn0 = false;
            } else {
                box.innerText = "X";
                turn0 = true;
            }
            box.Disabled=true;
            checkWinner();
        }
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
      box.disabled = true; 
    }
}


const enableBoxes = ()=>{
    for(let box of boxes){
      box.disabled = false; 
      box.innerText="";
    }
}

const showWinner =(winner)=>{
msg.innerText=`Congratulations, Winner is = ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
}
const checkWinner =()=>{
    for( let pattern of win){
      //  console.log(pattern[0], pattern[1], pattern[2]);
       //    console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;
       if(pos1Val !=""&& pos2Val !==""&& pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
        }
       }
    }

}

newbtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)