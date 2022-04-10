/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

// Intercettiamo l'invio del form 
document.querySelector('form').addEventListener('submit', function (event) {
  // preveniamo il refresh della pagina
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
  console.log(level);
  
  // Costruire la griglia in base al livello di difficoltà prescelto
  //level === 'easy'
  let cells_number, cols_number;
  //Sfruttiamo lo switch case per mostrare il formato di griglia adatto
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

  /* Da fare in fase di refactoring: Estrarre il selettore e trasformarlo in un parametro della funzione */
  const gameAreaElement = document.querySelector('main .cells')

  // pulire area di gioco all'introduzione di una nuova griglia
  gameAreaElement.innerHTML = ''


  for (let i = 1; i <= cells_number; i++) {
    // creare l'elemento della dom (cella) da inserire nell'area di gioco
    /* Da fare in fase di refactoring: Estrarre il tag name e trasformarlo in un parametro */
    const cell = document.createElement('div')
    // appendere alla cella il numero progressivo generato nel ciclo
    cell.append(i)
    cell.classList.add('cell')
    // dimensionare la cella in base alla misura della griglia
    cell.style.width = `calc(100% / ${cols_number})`


    // appendere la cella all'area di gioco
    gameAreaElement.append(cell)

  }

}


/* Quando l'utente clicca sulle celle, queste si colorano di azzurro. */

/**
 * Handle cell click event
 * @param {string} css_selector Css selector
 * @param {string} css_class css class name
 */
function handleClick(css_selector, css_class) {

  // 1. selezionare tutte le celle mediante querySelectorAll
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