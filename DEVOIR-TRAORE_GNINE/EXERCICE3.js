class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    get perimeter() {
        return 2 * (this.largeur + this.hauteur);
    }

    get isValid() {
        return this.largeur > 0 && this.hauteur > 0;
    }

    isBiggerThan(other) {
        return this.perimeter > other.perimeter;
    }
}

class Square extends Rectangle {
    constructor(cote) {
        super(cote, cote);
    }
}

const rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.perimeter); // 60
console.log(rectangle1.isValid); // true

const rectangle2 = new Rectangle(-10, 20);
console.log(rectangle2.isValid); // true (abs applied)

const carre1 = new Square(10);
console.log(carre1.perimeter); // 40
console.log(rectangle1.isBiggerThan(carre1)); // true