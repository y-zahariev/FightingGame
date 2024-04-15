const unmarked = "border: 3px solid rgba(255, 255, 255, 0)"
const markedPl1 ="border: 3px solid red"
const markedPl2 = "border: 3px solid blue"
const selectedPl1 = "border: 5px solid red"
const selectedPl2 = "border: 5px solid blue"

var pl1
var pl2

var isPl1Picked = false
var isPl2Picked = false

const playUrl = './index.html'
const menuUrl = './menu.html'

const Direction = {
    Up: 'Up',
    Down: 'Down',
    Left: 'Left',
    Right: 'Right'
};

const pl1TableId = "playerOneTable"
const pl2TableId = "playerTwoTable"