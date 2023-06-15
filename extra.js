
class Square {
    constructor(_width){
        this.width = _width
        this.heigth = _width
        this.callTheGet = 0;
    }

    get Area() {
        this.callTheGet++;
        return this.width * this.heigth;
    }

    set Area(Area){
        this.width = Math.sqrt(Area);
        this.heigth = this.width;
    }
}

let AreaOfSquare = new Square(32);
console.log(AreaOfSquare.Area)

AreaOfSquare.Arearea = 25;
console.log(AreaOfSquare.Area)
console.log(AreaOfSquare.width)
console.log(AreaOfSquare.heigth)
//
console.log(AreaOfSquare.Area)
console.log(AreaOfSquare.Area)
console.log(AreaOfSquare.Area)


console.log(AreaOfSquare.callTheGet)

//Static Method:

class square1 {
    constructor(_width) {
        this.width = _width;
        this.heigth = _width;
    }
    static equall(a, b) {
        return a.width*a.heigth === b.width*b.heigth?"equall":"not equall";

    }

    static IsValid(a,b){
        return a.width === b.width && a.heigth ===b.heigth;
    }
}



let square_a = new square1(8);
let square_b = new square1(8);
console.log(square1.IsValid(square_a, square_b))

console.log(square1.equall(square_a,square_b))

// Classes: Inheritance and Extends

