// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     return color
// }

// const firstColor = makeColor(25, 200, 120);

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    };
    rgb() {
        return `rgb(${this.r},${this.g},${this.b})`;
    }
};

const c1 = new Color(255, 255, 25, "c1");
const c2 = new Color(255, 255, 20, "c2");

class Cal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    flux() {
        const { x, y } = this;
        return x + y;
    };
    minus() {
        const { x, y } = this;
        return x - y;
    }
    multiply() {
        const { x, y } = this;
        return x * y;
    }
    divide() {
        const { x, y } = this;
        return x / y;
    }

}
