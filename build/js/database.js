"use strict";
class InMemoryDatabase {
    constructor() {
        this.db = {};
    }
    get(id) {
        return this.db[id];
    }
    set(id, value) {
        this.db[id] = value;
    }
}
class PersistentMemoryDB extends InMemoryDatabase {
    saveToString() {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState) {
        this.db = JSON.parse(storedState);
    }
}
const myDB = new PersistentMemoryDB();
myDB.set("foo", 22);
console.log(myDB.get("foo"));
const saved = myDB.saveToString();
myDB.restoreFromString(saved);
console.log(myDB.get("foo"));
