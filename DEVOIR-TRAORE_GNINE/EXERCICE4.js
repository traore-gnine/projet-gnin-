let moyenne;

do {
    moyenne = parseFloat(prompt("Veuillez entrer votre moyenne :"));

    if (moyenne >= 0 && moyenne <= 20) {
        switch (true) {
            case moyenne >= 18:
                console.log("Excellent");
                break;
            case moyenne >= 16:
                console.log("Très bien");
                break;
            case moyenne >= 14:
                console.log("Bien");
                break;
            case moyenne >= 12:
                console.log("Assez Bien");
                break;
            case moyenne >= 10:
                console.log("Passable");
                break;
            case moyenne >= 8:
                console.log("Insuffisant");
                break;
            case moyenne >= 6:
                console.log("Faible");
                break;
            default:
                console.log("Médiocre");
        }
    } else {
        console.log("Moyenne incorrecte. Veuillez entrer une moyenne entre 0 et 20.");
    }

} while (moyenne < 0 || moyenne > 20);
