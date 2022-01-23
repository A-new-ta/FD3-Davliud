class Product {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
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
class Scales {
    constructor(storage) {
        this.storage = storage;
    }
    add(product) {
        this.storage.addItem(product);
    }
    ;
    getSumScale() {
        let result = 0;
        let length = this.storage.getCount();
        for (let i = 0; i < length; i++) {
            let obj = this.storage.getItem(i);
            result += obj.getScale();
        }
        return result;
    }
    ;
    getNameList() {
        let result = [];
        let length = this.storage.getCount();
        for (let i = 0; i < length; i++) {
            let obj = this.storage.getItem(i);
            result.push(obj.getName());
        }
        return result;
    }
    ;
}
class ScalesStorageEngineArray {
    constructor() {
        this.productsArr = [];
    }
    addItem(item) {
        this.productsArr.push(item);
    }
    ;
    getItem(index) {
        return this.productsArr[index];
    }
    ;
    getCount() {
        return this.productsArr.length;
    }
}
class ScalesStorageEngineLocalStorage {
    constructor() {
        this.localStorageKey = 'products';
        localStorage.removeItem(this.localStorageKey);
    }
    addItem(item) {
        let storage;
        if (!localStorage.getItem(this.localStorageKey)) {
            storage = [];
        }
        else {
            storage = JSON.parse(localStorage.getItem(this.localStorageKey));
        }
        storage.push(item);
        localStorage.setItem(this.localStorageKey, JSON.stringify(storage));
    }
    ;
    getItem(index) {
        let storage;
        storage = JSON.parse(localStorage.getItem(this.localStorageKey));
        return new Product(storage[index].name, storage[index].weight);
    }
    ;
    getCount() {
        if (localStorage.getItem(this.localStorageKey) !== null) {
            let storage;
            storage = JSON.parse(localStorage.getItem(this.localStorageKey));
            return storage.length;
        }
    }
}
// хранение в массиве
let storageArray = new ScalesStorageEngineArray();
let scalesArr = new Scales(storageArray);
// хранение в localStorage
let locStorage = new ScalesStorageEngineLocalStorage;
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
//# sourceMappingURL=app.js.map