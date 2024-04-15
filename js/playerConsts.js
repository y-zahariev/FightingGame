//Kenji
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
attackFrames: 2,
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

//Samurai Mack
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
attackFrames: 4,
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
        x: 70,
        y: 50
    },
    width: 190,
    height: 50
}
};

//Crystal Mauler
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
attackFrames: 4,
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
        x: 75,
        y: 0
    },
    width: 60,
    height: 150
}
};

//FireKnight
const fireKnight = {
    position:{
        x:0,
        y:0
    },
    width:65,
    velocity: {
        x: 0,
        y: 10
    },
    imageSrc: './img/FireKnight/animations/idle.png',
    framesMax: 11,
    scale: 2.5,
    offset: {
        x: 330,
        y: 167
    },
    attackFrames: 5,
    sprites: {
        idle:{
            imageSrc: './img/FireKnight/animations/idle.png',
            framesMax: 8
        },
        run:{
            imageSrc: './img/FireKnight/animations/run.png',
            framesMax: 8
        },
        jump:{
            imageSrc: './img/FireKnight/animations/jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './img/FireKnight/animations/fall.png',
            framesMax: 3
        },
        attack1: {
            imageSrc: './img/FireKnight/animations/atk_1.png',
            framesMax: 11
        },
        takeHit: {
            imageSrc: './img/FireKnight/animations/take_hit.png',
            framesMax: 6
        },
        death: {
            imageSrc: './img/FireKnight/animations/death.png',
            framesMax: 13
        }
    },
    attackBox: {
        offset: {
            x: 65,
            y: 0
        },
        width: 130,
        height: 150
    }
    };

//Ground Monk
const groundMonk = {
    position:{
        x:0,
        y:0
    },
    width:55,
    velocity: {
        x: 0,
        y: 10
    },
    imageSrc: './img/GroundMonk/animations/idle.png',
    framesMax: 6,
    scale: 3,
    offset: {
        x: 405,
        y: 213
    },
    attackFrames: 3,
    sprites: {
        idle:{
            imageSrc: './img/GroundMonk/animations/idle.png',
            framesMax: 6
        },
        run:{
            imageSrc: './img/GroundMonk/animations/run.png',
            framesMax: 8
        },
        jump:{
            imageSrc: './img/GroundMonk/animations/jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './img/GroundMonk/animations/fall.png',
            framesMax: 3
        },
        attack1: {
            imageSrc: './img/GroundMonk/animations/atk_1.png',
            framesMax: 6
        },
        takeHit: {
            imageSrc: './img/GroundMonk/animations/take_hit.png',
            framesMax: 6
        },
        death: {
            imageSrc: './img/GroundMonk/animations/death.png',
            framesMax: 18
        }
    },
    attackBox: {
        offset: {
            x: 55,
            y: 0
        },
        width: 80,
        height: 150
    }
    };

//Leaf Ranger
const leafRanger = {
    position:{
        x:0,
        y:0
    },
    width:65,
    velocity: {
        x: 0,
        y: 10
    },
    imageSrc: './img/LeafRanger/animations/idle.png',
    framesMax: 12,
    scale: 2.5,
    offset: {
        x: 325,
        y: 167
    },
    attackFrames: 6,
    sprites: {
        idle:{
            imageSrc: './img/LeafRanger/animations/idle.png',
            framesMax: 12
        },
        run:{
            imageSrc: './img/LeafRanger/animations/run.png',
            framesMax: 10
        },
        jump:{
            imageSrc: './img/LeafRanger/animations/jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './img/LeafRanger/animations/fall.png',
            framesMax: 3
        },
        attack1: {
            imageSrc: './img/LeafRanger/animations/atk_1.png',
            framesMax: 10
        },
        takeHit: {
            imageSrc: './img/LeafRanger/animations/take_hit.png',
            framesMax: 6
        },
        death: {
            imageSrc: './img/LeafRanger/animations/death.png',
            framesMax: 19
        }
    },
    attackBox: {
        offset: {
            x: 65,
            y: 50
        },
        width: 180,
        height: 50
    }
    };

//Metal Bladekeeper
const metalBladekeeper = {
    position:{
        x:0,
        y:0
    },
    width:50,
    velocity: {
        x: 0,
        y: 10
    },
    imageSrc: './img/MetalBladekeeper/animations/idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 330,
        y: 167
    },
    attackFrames: 2,
    sprites: {
        idle:{
            imageSrc: './img/MetalBladekeeper/animations/idle.png',
            framesMax: 8
        },
        run:{
            imageSrc: './img/MetalBladekeeper/animations/run.png',
            framesMax: 8
        },
        jump:{
            imageSrc: './img/MetalBladekeeper/animations/jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './img/MetalBladekeeper/animations/fall.png',
            framesMax: 3
        },
        attack1: {
            imageSrc: './img/MetalBladekeeper/animations/atk_1.png',
            framesMax: 6
        },
        takeHit: {
            imageSrc: './img/MetalBladekeeper/animations/take_hit.png',
            framesMax: 6
        },
        death: {
            imageSrc: './img/MetalBladekeeper/animations/death.png',
            framesMax: 12
        }
    },
    attackBox: {
        offset: {
            x: 50,
            y: 60
        },
        width: 100,
        height: 50
    }
};

//Water Priestess
const waterPriestess = {
    position:{
        x:0,
        y:0
    },
    width:50,
    velocity: {
        x: 0,
        y: 10
    },
    imageSrc: './img/WaterPriestess/animations/idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 335,
        y: 167
    },
    attackFrames: 4,
    sprites: {
        idle:{
            imageSrc: './img/WaterPriestess/animations/idle.png',
            framesMax: 8
        },
        run:{
            imageSrc: './img/WaterPriestess/animations/run.png',
            framesMax: 10
        },
        jump:{
            imageSrc: './img/WaterPriestess/animations/jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './img/WaterPriestess/animations/fall.png',
            framesMax: 3
        },
        attack1: {
            imageSrc: './img/WaterPriestess/animations/atk_1.png',
            framesMax: 7
        },
        takeHit: {
            imageSrc: './img/WaterPriestess/animations/take_hit.png',
            framesMax: 7
        },
        death: {
            imageSrc: './img/WaterPriestess/animations/death.png',
            framesMax: 16
        }
    },
    attackBox: {
        offset: {
            x: 50,
            y: 65
        },
        width: 120,
        height: 50
    }
};

//Wind Hashashin
const windHashashin = {
    position:{
        x:0,
        y:0
    },
    width:50,
    velocity: {
        x: 0,
        y: 10
    },
    imageSrc: './img/WindHashashin/animations/idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 335,
        y: 167
    },
    attackFrames: 1,
    sprites: {
        idle:{
            imageSrc: './img/WindHashashin/animations/idle.png',
            framesMax: 8
        },
        run:{
            imageSrc: './img/WindHashashin/animations/run.png',
            framesMax: 8
        },
        jump:{
            imageSrc: './img/WindHashashin/animations/jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './img/WindHashashin/animations/fall.png',
            framesMax: 3
        },
        attack1: {
            imageSrc: './img/WindHashashin/animations/atk_1.png',
            framesMax: 8
        },
        takeHit: {
            imageSrc: './img/WindHashashin/animations/take_hit.png',
            framesMax: 6
        },
        death: {
            imageSrc: './img/WindHashashin/animations/death.png',
            framesMax: 19
        }
    },
    attackBox: {
        offset: {
            x: 50,
            y: 65
        },
        width: 65,
        height: 50
    }
};