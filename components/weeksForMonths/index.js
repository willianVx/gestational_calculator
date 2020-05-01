
const defineIndex = (value) => {
    switch (true) {
        case value <= 4:
            return 0;
        case value <= 8:
            return 1;
        case value <= 13:
            return 2; 
        case value <= 17:
            return 3;   
        case value <= 22:
            return 4;
        case value <= 27:
            return 5;
        case value <= 31:
            return 6;
        case value <= 35:
            return 7;
        case value <= 40:
            return 8;
        default:
            return 9;
    }
}

const resolveDateWeekValue = (value) => {

    const dateValues = [
        "primeiro",
        "segundo",
        "terceiro",
        "quarto",
        "quinto",
        "sexto",
        "sétimo",
        "oitavo",
        "nono",
        "décimo",
    ];
    
    return dateValues[defineIndex(value)];
}

export default resolveDateWeekValue;
