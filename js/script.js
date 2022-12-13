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

// Funzione per mostrare tutte le bombe se una viene cliccata
function showAllBombs(createBombsArray){

    const cells = document.getElementsByClassName('square');

    for(let i=0; i<cells.length; i++){
        let currentSquare = cells[i];
        if(createBombsArray.includes(parseInt(currentSquare.innerText))){
            currentSquare.classList.add('clicked');
            currentSquare.classList.add('red');
        }
    }
}

// Richiamo al bottone per avviare il gioco
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

//Variabile contatore
let contCells = 0; 

// Ciclo per generare i quadrati con richiamo alla funzione
for(let i = 0; i < grid_number; i++){
    const currentSquare = createGridSquare(i+1);
    grid.appendChild(currentSquare);


// Click sui quadrati
currentSquare.addEventListener('click', function(){
    
    this.classList.toggle('clicked')
    //Richiamo la funzione che scopre tutte le bombe e restituisco un messaggio all'utente
    if (arrayBombs.includes(parseInt(this.innerText))){
        showAllBombs(arrayBombs);
        alert ('Ops, hai perso!');
    }

    //Conto il punteggio dell'utente
    else
    {
        contCells++;
        document.getElementById('punteggio').innerHTML =`Il tuo punteggio è : ${contCells}`        
    }
},{once:`true`})
}


// Funzione che crea tutti i quadrati
function createGridSquare(number){
    if(grid_number == 100){
        const currentElement = document.createElement('div');
        currentElement.classList.add("square", "square-easy");
        currentElement.innerText = number;
        return currentElement;
   
    }

    else if(grid_number == 81){
        const currentElement = document.createElement('div');
        currentElement.classList.add("square", "square-med");
        currentElement.innerText = number;
        return currentElement;
    }

    else{
        const currentElement = document.createElement('div');
        currentElement.classList.add("square", "square-diff");
        currentElement.innerText = number;
        return currentElement;
    }
}
arrayBombs = createBombsArray(1, grid_number)
})
