
//creating grid
window.addEventListener("load", function(){

    grid = document.querySelector("#grid");

    for(let i=0; i < 9; i++){
        let cell = document.createElement("div");
        cell.innerHTML = ""; 
        cell.id = "c"+i;
        cell.className = "cell";
        cell.addEventListener("click", makeMove);
        grid.appendChild(cell);
    }

});

//global vars
let turn = "X";
let win = false;
let modal = document.getElementById('modal');
let i=0;


function makeMove(){
    
    let value = this.innerHTML;
    
    if(value === ""){
        this.innerText = turn;
        
        if(i%2 == 0){
            this.style.color = "var(--green)";
        }else{
            this.style.color = "var(--lime)"; 
        }
        i++;     
    }else{
        alert("pick a new spot");
    }

    winCheck();
}


function winCheck(){
    
    let c1 = document.getElementById('c0').innerHTML;
    let c2 = document.getElementById('c1').innerHTML;
    let c3 = document.getElementById('c2').innerHTML;
    let c4 = document.getElementById('c3').innerHTML;
    let c5 = document.getElementById('c4').innerHTML;
    let c6 = document.getElementById('c5').innerHTML;
    let c7 = document.getElementById('c6').innerHTML;
    let c8 = document.getElementById('c7').innerHTML;
    let c9 = document.getElementById('c8').innerHTML;
    
    //8 possible win condition checks
    if(c1 === turn && c2 === turn && c3 === turn){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = turn + " wins!";
    }else if(c4 === turn && c5 === turn && c6 === turn){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = turn + " wins!";
    }else if(c7 === turn && c8 === turn && c9 === turn){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = turn + " wins!";
    }else if(c1 === turn && c4 === turn && c7 === turn){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = turn + " wins!";
    }else if(c2 === turn && c5 === turn && c8 === turn){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = turn + " wins!";
    }else if(c3 === turn && c6 === turn && c9 === turn){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = turn + " wins!";
    }else if(c1 === turn && c5 === turn && c9 === turn){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = turn + " wins!";
    }else if(c3 === turn && c5 === turn && c7 === turn){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = turn + " wins!";
    }//tie checker
    else if(c1 != "" && c2 != "" && c3 != "" && 
            c4 != "" && c5 != "" && c6 != "" && 
            c7 != "" && c8 != "" && c9 != "" &&  win == false){
        modal.style.display = "flex";
        win = true;
        document.getElementById('winTxt').innerText = "It's a tie!";
    }

    nextTurn();
}


function nextTurn(){
    let turnChar = document.getElementById('turn');

    if(turn === "X"){
        turn = "O";
        turnChar.innerHTML = "O";
    }else{
        turn = "X";
        turnChar.innerHTML = "X";
    }
}

//reset game
let btn = document.getElementById('reset');
btn.onclick = reset;

function reset(){
    window.location.reload();
}