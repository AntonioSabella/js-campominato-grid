/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// intercetta l'invio del form 
document.querySelector('form').addEventListener('submit', function (event) {
  // previene il refresh della pagina
  event.preventDefault();

  startGame(event);
})


/**
 * Starts the game
 * @param {object} event Dom event
 */
function startGame(event) {
  // seleziona il livello 
  const level = event.target[0].value;

  //console.log(level);
  // decidere come strutturare la griglia in base al livello scelto
  //level === 'easy'
  let cells_number, cols_number;

  switch (level) {
    case 'easy':
      cells_number = 100;
      cols_number = 10; // 10 x 10
      break;
    case 'medium':
      cells_number = 81;
      cols_number = 9; // 9 x 9
      break;
    case 'hard':
      cells_number = 49;
      cols_number = 7; // 7 x 7
      break;
  }

  //console.log(cells_number, cols_number);
  generate_grid(cells_number, cols_number);
  handleClick('.cell', 'selected')
}

/**
 * Generate the game grid
 * 
 * cells_number = 100, cols_number = 10
 * @param {number} cells_number The cells Numbner to generate
 * @param {number} cols_number the number of columns and rows
 */
function generate_grid(cells_number, cols_number) {

  /* TODO: Estrai il selettore e trasformalo in un parametro */
  const gameAreaElement = document.querySelector('main .cells')

  // pulire area di gioco
  gameAreaElement.innerHTML = ''


  for (let i = 1; i <= cells_number; i++) {
    // creare l'elemento della dom (cella) da inserire nell'area di gioco
    /* TODO: Estrai il tag name e trasformalo in un parametro */
    const cell = document.createElement('div')
    // appendere alla cella il numero progressivo generato nel ciclo
    cell.append(i)
    cell.classList.add('cell')
    // dimensionare la cella in base alla misura della griglia
    cell.style.width = `calc(100% / ${cols_number})`


    // appendere la calla all'area di gioco
    gameAreaElement.append(cell)

  }

}



/* Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */


/**
 * Handle cell click event
 * @param {string} css_selector Css selector
 * @param {string} css_class css class name
 */
function handleClick(css_selector, css_class) {

  // 1. selezionare tutte le celle querySelectorAll
  const cells = document.querySelectorAll(css_selector)
  //console.log(cells);
  // 2. ciclare tra gli elementi della dom
  for (let i = 0; i < cells.length; i++) {
    const cellElemnt = cells[i];
    //console.log(cellElemnt);
    // 3. attacchare l'event listener all'elemento della dom (cell)
    cellElemnt.addEventListener('click', function () {
      //console.log(this);
      // 4. evidenziare la cella di azzurro. 
      //this.style.backgroundColor = 'cornflowerblue'
      this.classList.add(css_class)
    });

  }

}


/* (Soluzione da rivedere e implementare correttamente)
 let difficult_easy = document.getElementById('easy').value;
console.log(difficult_easy);
let difficult_medium = document.getElementById('medium').value;
console.log(difficult_medium);
let difficult_hard = document.getElementById('hard').value;
console.log(difficult_hard);
let play_button = document.getElementById('play')
let difficulty_select = document.getElementById('difficoltà').value;
console.log(difficulty_select);


//Funzione per creare gli elementi Cell all'interno di Cells
function generateGrid(number_of_cells, selector, element_name, class_name) {
    const cellsElement = document.querySelector(selector)
    for (let i = 1; i <= number_of_cells; i++) {
      const cell = document.createElement(element_name)
      cell.classList.add(class_name)
      cellsElement.append(cell)
    }
  }

  //generateGrid(100, '.cells', 'div', 'cell')

  // Funzione per selezionare le celle
  function selectCells(selector) {
    const cells = document.querySelectorAll(selector)
    return cells
  }
  
  function activateCell(selector, active_class) {
    const cells = selectCells(selector)
    //console.log(cells);
  
    for (let index = 0; index < cells.length; index++) {
      const cell = cells[index];
      cell.addEventListener('click', function () {
        console.log(this);
        this.classList.toggle(active_class)
        this.firstChild.style.color = 'white'
        this.style.backgroundColor = 'cornflowerblue'
      })
    }
  }


  
  function generateGridNumbers() {
    const gridNumbers = []
    
    for(let i = 1; i <= 100 ; i++) {
        gridNumbers.push([i]);
    }
    return gridNumbers
  }
  
  
  function fillCells(selector) {
    const cells = selectCells(selector)
    console.log(cells);
    for (let index = 0; index < cells.length; index++) {
      const cell = cells[index];
      console.log(cell);
      const gridNumbers = generateGridNumbers()
      cell.innerHTML = `<span>${gridNumbers[index]}</span>`
    }
  }
  


   generateGrid(100, '.cells', 'div', 'cell')
  //generateGridNumbers(100)
  //generateGrid(81, '.cells', 'div', 'cell')
  //generateGridNumbers(81)

  //generateGrid(49, '.cells', 'div', 'cell')
  //generateGridNumbers(49)


  activateCell('.cell', 'selected')

  fillCells('.cell') */