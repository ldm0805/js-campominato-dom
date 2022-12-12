// Funzione che crea l'array delle bombe
function createBombsArray(min, max){
    let bombs=[];
      let i=0;

      while( i < 16){
      let number = Math.floor(Math.random() * (max - min + 1)) + min;

      if(!bombs.includes(number)){
          bombs.push(number);
          i++;
      }
  }
  return bombs
}

// Funzione per mostrare tutte le bombe
function showAllBombs(createBombsArray){

    const cells = document.getElementsByClassName('square');

    for(let i=0; i<cells.length; i++){
        let cell = cells[i];
        if(createBombsArray.includes(parseInt(cell.innerText))){
            cell.classList.add('clicked');
            cell.classList.add('red');
        }
    }
}
// Richiamo al bottone
let button = document.getElementById('item-up');

button.addEventListener('click', function(){ 

// Collego la griglia
let grid = document.getElementById('grid');

// Controllo griglia per non generarne altre
if(grid){
    grid.innerHTML = '' ;
}

// Recupero valore livello
grid_number = parseInt(document.getElementById('level').value);


// Ciclo per generare i quadrati con richiamo alla funzione
let contCells = 0; //contatore punti

for(let i = 0; i < grid_number; i++){
    const currentSquare = createGridSquare(i+1);
    grid.appendChild(currentSquare);


// Click sui quadrati
currentSquare.addEventListener('click', function(){
    
    this.classList.toggle('clicked')

    if (arrayBombs.includes(parseInt(this.innerText))){
        this.classList.add('click');
        this.classList.add('red');
        showAllBombs(arrayBombs);
        alert ('Hai preso una bomba'+ this.innerText);
    }
    else
    {
        contCells++;
        console.log(contCells)
    }
    console.log(`La casella cliccata è la numero: ${this.innerText}`)
},{once:`true`})
}

// array bombe

function createGridSquare(number){
    if(grid_number == 100){
        const currentElement = document.createElement('div');
        currentElement.classList.add("square");
        currentElement.innerText = number;
        return currentElement;
   
    }

    else if(grid_number == 81){
        const currentElement = document.createElement('div');
        currentElement.classList.add("square_med");
        currentElement.innerText = number;
        return currentElement;
    }

    else{
        const currentElement = document.createElement('div');
        currentElement.classList.add("square_min");
        currentElement.innerText = number;
        return currentElement;
    }
}
arrayBombs = createBombsArray(1, grid_number)
console.log('Array bombe' + arrayBombs)
})
