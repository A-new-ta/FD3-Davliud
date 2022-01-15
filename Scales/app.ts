class Scales {

    productList: Array<Product> = [];

    add (product:Product): void {
        this.productList.push(product);
    };
    getSumScale (): number {
        let result: number = 0;
        this.productList.forEach((product:Product) => {
            result += product.getScale();
        });
        return result;
    };
    getNameList (): Array<string> {
        let result:Array<string> = [];
        this.productList.forEach((product:Product) => {
            result.push(product.getName());
        });
        return result;
    };
}

class Product {

    name: string;
    weight: number;
    
    constructor (name: string, weight: number){
        this.name = name;
        this.weight = weight;
    }
    getName(): string {
        return this.name;
    };
    getScale(): number {
        return this.weight;
    };
}

class Apple extends Product {

    constructor(name: string, weight: number) {
        super(name, weight);
    }
}

class Tomato extends Product {

    constructor (name: string, weight: number) {
        super(name, weight);
    }
}

let scales = new Scales();

let apple1 = new Apple ("яблоко1", 150);
let apple2 = new Apple ("яблоко2", 50);
let tomato1 = new Tomato("помидор1", 110);
let tomato2 = new Tomato("помидор2", 90);

scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);

console.log(scales.getSumScale());
console.log(scales.getNameList());
