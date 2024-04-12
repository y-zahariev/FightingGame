function pickCharacter(character, flip){
    switch(character) {
        case 'kenji':
            return new Fighter(kenji);

        case 'samuraiMack':
            return new Fighter(samuraiMack);

        case 'crystalMauler':
            return new Fighter(crystalMauler);

        case 'fireKnight':
            return new Fighter(fireKnight);

        case 'groundMonk':
            return new Fighter(groundMonk);

        case 'leafRanger':
            return new Fighter (leafRanger);

        case 'metalBladekeeper':
            return new Fighter (metalBladekeeper);

        case 'waterPriestess':
            return new Fighter (waterPriestess);

        case 'windHashashin':
            return new Fighter (windHashashin);
    }

}

