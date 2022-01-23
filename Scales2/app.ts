interface IScalable {
    getScale(): number;
    getName(): string;
}

class Scales {

    productList: Array<IScalable> = [];

    add (product:IScalable): void {
        this.productList.push(product);
    };
    getSumScale (): number {
        let result: number = 0;
        this.productList.forEach((product:IScalable) => {
            result += product.getScale();
        });
        return result;
    };
    getNameList (): Array<string> {
        let result:Array<string> = [];
        this.productList.forEach((product:IScalable) => {
            result.push(product.getName());
        });
        return result;
    };
}

class Apple implements IScalable {
    
    name: string;
    weight: number;

    constructor(_name: string, _weight: number) {
        this.name = _name;
        this.weight = _weight;
    }
    getName(): string {
        return this.name;
    };
    getScale(): number {
        return this.weight;
    };
}

class Tomato implements IScalable {

    name: string;
    weight: number;

    constructor(_name: string, _weight: number) {
        this.name = _name;
        this.weight = _weight;
    }
    getName(): string {
        return this.name;
    };
    getScale(): number {
        return this.weight;
    };
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
