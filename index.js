// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(num) {
        this.raidus = num/2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    set circumference(num) {
        this.radius = num/(Math.PI * 2);
    }
    get area() {
        return Math.PI * (this.radius ** 2);
    }

    // math.sqrt return the square root of a number
    set area(num) {
        this.radius = math.sqrt(num/Math.PI)
    }
}