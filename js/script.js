let arrayBombs=[];
// Collego il bottone

let button = document.getElementById('item-up');

button.addEventListener('click', function(){ 

// Collego la griglia
let grid = document.getElementById('grid');

// Controllo griglia per non generarne altre
if(grid){
    grid.innerHTML = '' ;
}

// Recupero valore livello
grid_number = document.getElementById('level').value;

// Ciclo per generare i quadrati con richiamo alla funzione
for(let i = 0; i < grid_number; i++){
    const currentSquare = createGridSquare(i+1);
    grid.appendChild(currentSquare);
// Click sui quadrati
    currentSquare.addEventListener('click', function(){
        this.classList.toggle('clicked')
        this.classList.add('red')
        grid.classList.add('remove')
        console.log(`La casella cliccata è la numero: ${this.innerText}`)
    })
}



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
})



// funzione che genera numeri casuali
// Numero compreso tra 1 e numero di celle
// non ci sono due numeri uguali
// creiamo un'array vuoto per mettere i numeri gia usciti
// arrayBombs = createBombsArray(cellsNumber)
// console.log(arrayBombs)

// let cellsNumber


//  function createBombsArray(min, max){
//      let bombs=[];
//      let i=0;
//      while(i < 16){
//      let number = Math.floor(Math.random() * (max - min + 1)) + min;
//      if(!arrayBombs.includes(number)){
//          arrayBombs.push(number);
//          i++;
//      }
//  }

//  console.log(bombs)
//  return bombs;
//  }






//  function createBombsArray(number_cells){
//      let bombs = [];
//      for(let i = 0; i < 16; i++){
//          let random_number = generateUniqueRandomNumbers(bombs, 1, number_cells)
//          bombs.push(random_number)
//         }
//         console.log(bombs)
//      return bombs;
//  }

//  function generateUniqueRandomNumbers(bombs, min, max)
//  {
//      let flag = false;
//      let randomInt;
//      while(flag == false){
//          randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
//          if (!bombs.includes(randomInt)){
//              flag = true;
//          }
//      }
//      return randomInt
//  }

// // click del pulstante diventa rosso ecc, nel secondo click

// if(bombs.incudes(parseInt(this.innerText))){

// }