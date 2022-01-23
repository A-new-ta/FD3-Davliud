interface IStorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}

class Product {
    
    constructor(private name: string, private weight: number,) {
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


class Scales<StorageEngine extends IStorageEngine> {

    storage: StorageEngine;

    constructor(storage: StorageEngine) {
        this.storage = storage;
    }

    add (product: Product): void {
        this.storage.addItem(product);
    };

    getSumScale (): number {
        let result: number = 0;
        let length: number = this.storage.getCount();
        for (let i = 0; i < length; i++) {
            let obj: Product = this.storage.getItem(i);
            result += obj.getScale();
        }
        return result;
    };

    getNameList (): Array<string> {
        let result: Array<string> = [];
        let length: number = this.storage.getCount();
        for (let i = 0; i < length; i++) {
            let obj: Product = this.storage.getItem(i);
            result.push(obj.getName());
        }
        return result;
    };
}

class ScalesStorageEngineArray implements IStorageEngine {
    
    productsArr: Array<Product> = [];

    addItem(item: Product): void {
        this.productsArr.push(item)
    };
    getItem(index: number): Product {
        return this.productsArr[index];
    };
    getCount(): number {
        return this.productsArr.length
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    
    localStorageKey: string = 'products';
    constructor() {
        localStorage.removeItem(this.localStorageKey);
    }

    addItem(item: Product): void {
        let storage: Array<any>;
        if (!localStorage.getItem(this.localStorageKey)) {
            storage = [];
        } else {
            storage = JSON.parse(localStorage.getItem(this.localStorageKey));
        }
        storage.push(item);
        localStorage.setItem(this.localStorageKey, JSON.stringify(storage));
    };

    getItem(index: number): Product {
        let storage: Array<any>;
        storage = JSON.parse(localStorage.getItem(this.localStorageKey));
        return new Product(storage[index].name, storage[index].weight);
    };

    getCount(): number {
        if (localStorage.getItem(this.localStorageKey) !== null) {
            let storage: Array<any>;
            storage = JSON.parse(localStorage.getItem(this.localStorageKey));
            return storage.length;
        }
    }
}


// хранение в массиве
let storageArray = new ScalesStorageEngineArray();
let scalesArr = new Scales(storageArray);

// хранение в localStorage
let locStorage = new ScalesStorageEngineLocalStorage
let scalesLocStor = new Scales(locStorage);

let apple1 = new Product('яблоко1', 150);
let apple2 = new Product('яблоко2', 50);
let tomato1 = new Product('помидор1', 110);
let tomato2 = new Product('помидор2', 90);

scalesArr.add(apple1);
scalesArr.add(apple2);
scalesArr.add(tomato1);
scalesArr.add(tomato2);

scalesLocStor.add(apple1);
scalesLocStor.add(apple2);
scalesLocStor.add(tomato1);
scalesLocStor.add(tomato2);


console.log(`Array: list of products: ${scalesArr.getNameList()}`);
console.log(`Array: total weight: ${scalesArr.getSumScale()}`);

console.log(`LocalStorage: list of products: ${scalesLocStor.getNameList()}`);
console.log(`LocalStorage: total weight: ${scalesLocStor.getSumScale()}`);





