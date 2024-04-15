 const canvas = document.querySelector('#fightScene');
 const canvasContext = canvas.getContext('2d');

 canvas.width = 1024;
 canvas.height = 576;

 canvasContext.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/background.png'
})

const shop = new Sprite({
    position: {
        x: 600,
        y: 128
    },
    imageSrc: './img/shop.png',
    scale: 2.75,
    framesMax: 6
})

if (sessionStorage.getItem('loadedOnce') === 'true') {
    // Redirect to page 2 because this is a refresh
    window.location.href = menuUrl;
    sessionStorage.setItem('loadedOnce', 'false');
} else {
    // Mark page as loaded once
    sessionStorage.setItem('loadedOnce', 'true');
}

const player = pickCharacter(localStorage.getItem('player1'))
const enemy = pickCharacter(localStorage.getItem('player2'))
enemy.position.x = 800;
player.position.x = 200;
enemy.offset.x += enemy.width;
enemy.attackBox.offset.x -= enemy.width + enemy.attackBox.width ;

const keys = {
    a: {
        pressed:false
    },
    d: {
        pressed:false
    },
    w: {
        pressed:false
    },
    ArrowRight: {
        pressed:false
    },
    ArrowLeft: {
        pressed:false
    }
}

decreaseTimer()

function animate(){
    window.requestAnimationFrame(animate)
    canvasContext.fillStyle = 'black'
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    shop.update()
    canvasContext.fillStyle = 'rgba(255, 255, 255, 0.15)'
    canvasContext.fillRect(0,0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    player.velocity.x = 0
    enemy.velocity.x = 0

    //player movement
   
    if (keys.a.pressed && player.lastKey === 'a') {
        player.velocity.x = -5
        player.switchSprite('run')
    }else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5
        player.switchSprite('run')
    }else{
        player.switchSprite('idle')
    }

    //jumping
    if(player.velocity.y < 0){
        player.switchSprite('jump')
    }else if (player.velocity.y > 0 ){
        player.switchSprite('fall')
    }

    //enemy movement
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -5
        enemy.switchSprite('run')
    }else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
        enemy.velocity.x = 5
        enemy.switchSprite('run')
    }else{
        enemy.switchSprite('idle')
    }

    //jumping
    if(enemy.velocity.y < 0){
        enemy.switchSprite('jump')
    }else if (enemy.velocity.y > 0 ){
        enemy.switchSprite('fall')
    }

    //detect for collision and enemy gets hit
    if (
        rectangularCollision({
            rectangle1:player,
            rectangle2:enemy
        }) &&
        player.isAttacking && 
        player.framesCurrent === player.attackFrames
    ) {
        enemy.takeHit()
        player.isAttacking = false
        
        gsap.to('#enemyHealth', {
            width: enemy.health + '%'
        })
    }

    //if player misses
    if(player.isAttacking && player.framesCurrent === player.attackFrames) {
        player.isAttacking = false
    }

    // this is where player gets hit
    if (
        rectangularCollision({
            rectangle1:enemy,
            rectangle2:player
        }) &&
        enemy.isAttacking && 
        enemy.framesCurrent === enemy.attackFrames
    ) {
        player.takeHit()
        enemy.isAttacking = false
        gsap.to('#playerHealth', {
            width: player.health + '%'
        })
    }

    //if enemy misses
    if(enemy.isAttacking && enemy.framesCurrent === enemy.attackFrames) {
        enemy.isAttacking = false
    }

    //end game based on health
    if (enemy.health <=0 || player.health <=0){
        determineWinner({player, enemy, timerId})
    }

}



animate()

window.addEventListener('keydown', (event) =>{
    if(!player.dead){
        switch (event.key) {
            case 'd':
                keys.d.pressed = true
                player.lastKey = 'd'
                break
            case 'a':
                keys.a.pressed = true
                player.lastKey = 'a'
                break
            case 'w':
                player.velocity.y = -20
                break
            case ' ':
                player.attack()
                break
        }
    }

    if(!enemy.dead){
        switch (event.key) {        
            case 'ArrowRight':
                keys.ArrowRight.pressed = true
                enemy.lastKey = 'ArrowRight'
                break
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true
                enemy.lastKey = 'ArrowLeft'
                break
            case 'ArrowUp':
                enemy.velocity.y = -20
                break
            case 'ArrowDown' :
                enemy.attack()
                break
        }
    }
})

window.addEventListener('keyup', (event) =>{
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
    }

    //enemy keys
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
    }
})