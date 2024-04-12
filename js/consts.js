const kenji = {
    position:{
    x:0,
    y:0
},
velocity: {
    x: 0,
    y: 0
},
color: 'blue',
imageSrc: './img/kenji/Idle.png',
framesMax: 4,
scale: 2.5,
offset: {
    x: 215,
    y: 167
},
sprites: {
    idle:{
        imageSrc: './img/kenji/Idle.png',
        framesMax: 4
    },
    run:{
        imageSrc: './img/kenji/Run.png',
        framesMax: 8
    },
    jump:{
        imageSrc: './img/kenji/Jump.png',
        framesMax: 2
    },
    fall: {
        imageSrc: './img/kenji/Fall.png',
        framesMax: 2
    },
    attack1: {
        imageSrc: './img/kenji/Attack1.png',
        framesMax: 4
    },
    takeHit: {
        imageSrc: './img/kenji/Take hit.png',
        framesMax: 3
    },
    death: {
        imageSrc: './img/kenji/Death.png',
        framesMax: 7
    }
},
attackBox:{
    offset: {
        x: 170,
        y: 50
    },
    width: 170,
    height: 50
}
};

const samuraiMack = {
    position:{
    x:0,
    y:0
},
velocity: {
    x: 0,
    y: 10
},
imageSrc: './img/samuraiMack/Idle.png',
framesMax: 8,
scale: 2.5,
offset: {
    x: 215,
    y: 157
},
width:70,
sprites: {
    idle:{
        imageSrc: './img/samuraiMack/Idle.png',
        framesMax: 8
    },
    run:{
        imageSrc: './img/samuraiMack/Run.png',
        framesMax: 8
    },
    jump:{
        imageSrc: './img/samuraiMack/Jump.png',
        framesMax: 2
    },
    fall: {
        imageSrc: './img/samuraiMack/Fall.png',
        framesMax: 2
    },
    attack1: {
        imageSrc: './img/samuraiMack/Attack1.png',
        framesMax: 6
    },
    takeHit: {
        imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
        framesMax: 4
    },
    death: {
        imageSrc: './img/samuraiMack/Death.png',
        framesMax: 6
    }
},
attackBox: {
    offset: {
        x: 100,
        y: 50
    },
    width: 160,
    height: 50
}
};

const crystalMauler = {
position:{
    x:0,
    y:0
},
width:75,
velocity: {
    x: 0,
    y: 10
},
imageSrc: './img/CrystalMauler/animations/idle.png',
framesMax: 8,
scale: 2.5,
offset: {
    x: 320,
    y: 167
},
sprites: {
    idle:{
        imageSrc: './img/CrystalMauler/animations/idle.png',
        framesMax: 8
    },
    run:{
        imageSrc: './img/CrystalMauler/animations/run.png',
        framesMax: 8
    },
    jump:{
        imageSrc: './img/CrystalMauler/animations/jump.png',
        framesMax: 3
    },
    fall: {
        imageSrc: './img/CrystalMauler/animations/fall.png',
        framesMax: 3
    },
    attack1: {
        imageSrc: './img/CrystalMauler/animations/atk_2.png',
        framesMax: 7
    },
    takeHit: {
        imageSrc: './img/CrystalMauler/animations/take_hit.png',
        framesMax: 6
    },
    death: {
        imageSrc: './img/CrystalMauler/animations/death.png',
        framesMax: 15
    }
},
attackBox: {
    offset: {
        x: 80,
        y: 0
    },
    width: 50,
    height: 150
}
};