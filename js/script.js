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

// creati 2 arrayBombs, 1 per i numeri 1 per le bombe




// Ciclo per generare i quadrati con richiamo alla funzione
for(let i = 0; i < grid_number; i++){
    const currentSquare = createGridSquare(i+1);
    grid.appendChild(currentSquare);


// Click sui quadrati
currentSquare.addEventListener('click', function(){
    this.classList.toggle('clicked')
    if (arrayBombs.includes(parseInt(this.innerText))){
        this.classList.remove('rd');

        this.classList.add('red');
        alert ('Hai preso una bomba'+ this.innerText);
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
console.log('questo' + arrayBombs)
})
