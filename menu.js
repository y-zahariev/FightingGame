const canvas = document.querySelector('#menu');
const canvasContext = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;


const background = new Sprite({
    position: {
        x: 362,
        y: 0
    },
    imageSrc: './img/logo2.png'
})

class Cell{
    constructor(x,y,td){
        this.x = x
        this.y = y
        this.td = td
    }
}

function animate(){
    window.requestAnimationFrame(animate)
    canvasContext.fillStyle = '#2A1C19'
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
}

animate();

var cellPl1 = new Cell(1, 1, document.querySelector('#playerOneTable td:first-child'))
cellPl1.td.style = markedPl1

var cellPl2 = new Cell(1, 1, document.querySelector('#playerTwoTable td:first-child'))
cellPl2.td.style = markedPl2


window.addEventListener('keydown', (event) =>{
    if(!isPl1Picked){
        switch (event.key) {
            case 'w':
                changeCharacter(pl1TableId, Direction.Up) 
                break
            case 'a':              
                changeCharacter(pl1TableId, Direction.Left)
                break
            case 's':   
                changeCharacter(pl1TableId, Direction.Down)      
                break
            case 'd':  
                changeCharacter(pl1TableId, Direction.Right)
                break
            case ' ':    
                pl1 = selectCharacter(pl1TableId)
                localStorage.setItem('player1', pl1);         
                isPl1Picked = true
                break
        }
    }

    //enemy keys
    if(!isPl2Picked){
        switch (event.key) {      
            case 'ArrowRight':
                changeCharacter(pl2TableId, Direction.Right)
                break
            case 'ArrowLeft':
                changeCharacter(pl2TableId, Direction.Left)
                break
            case 'ArrowUp':
                changeCharacter(pl2TableId, Direction.Up) 
                break
            case 'ArrowDown':
                changeCharacter(pl2TableId, Direction.Down)  
                break
            case 'Enter':
                pl2 = selectCharacter(pl2TableId)
                localStorage.setItem('player2', pl2);
                isPl2Picked = true
                break

        }
    }
})

function updateCells(currentCell, newCell, style){
    currentCell.td.style = unmarked
    newCell.style = style;  
    currentCell.td = newCell
}

function changeCharacter(table, direction){
    var currentCell = getCurrentCell(table)

    switch (direction) {
        case Direction.Left:
            currentCell.x -- 
            currentCell.x= (currentCell.x<1) ? 3 : currentCell.x
            break

        case Direction.Right:
            currentCell.x ++
            currentCell.x= (currentCell.x>3) ? 1 : currentCell.x; 
            break

        case Direction.Up:
            currentCell.y -- 
            currentCell.y= (currentCell.y<1) ? 3 : currentCell.y
            break

        case Direction.Down:
            currentCell.y ++
            currentCell.y= (currentCell.y>3) ? 1 : currentCell.y; 
            break
    }
 

    const newCell = document.querySelector('#' + table + ' tr:nth-child(' + currentCell.y + ') td:nth-child(' + currentCell.x + ')');
    updateCells(currentCell, newCell, getColor(table)) 
}

function getCurrentCell(table){
    if(table == pl1TableId){
        return cellPl1
        
    }else {
        return cellPl2
    }
}

function getColor(table){
    if(table == pl1TableId){
        return markedPl1
        
    }else {
        return markedPl2
    }
}

function getSelectedColor(table){
    if(table == pl1TableId){
        return selectedPl1
        
    }else {
        return selectedPl2
    }
}

function getPlayerToSelect(table){
    if(table == pl1TableId){
        return pl1
        
    }else {
        return pl2
    }
}

function selectCharacter(table){
    var currentCell = getCurrentCell(table)
    var player = getPlayerToSelect(table)
    player = currentCell.td.childNodes[0].alt.toString()
    currentCell.td.style = getSelectedColor(table) 
    return player
}