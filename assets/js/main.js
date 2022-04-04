/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

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

  fillCells('.cell')