class Scales {
    constructor() {
        this.productList = [];
    }
    add(product) {
        this.productList.push(product);
    }
    ;
    getSumScale() {
        let result = 0;
        this.productList.forEach(product => {
            result += product.getScale();
        });
        return result;
    }
    ;
    getNameList() {
        let result = [];
        this.productList.forEach(product => {
            result.push(product.getName());
        });
        return result;
    }
    ;
}
class Product {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    getName() {
        return this.name;
    }
    ;
    getScale() {
        return this.weight;
    }
    ;
}
class Apple extends Product {
    constructor(name, weight) {
        super(name, weight);
    }
}
class Tomato extends Product {
    constructor(name, weight) {
        super(name, weight);
    }
}
let scales = new Scales();
let apple1 = new Apple("яблоко1", 150);
let apple2 = new Apple("яблоко2", 50);
let tomato1 = new Tomato("помидор1", 110);
let tomato2 = new Tomato("помидор2", 90);
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
console.log(scales.getSumScale());
console.log(scales.getNameList());
//# sourceMappingURL=app.js.map