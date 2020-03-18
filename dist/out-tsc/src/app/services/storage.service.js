import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let StorageService = class StorageService {
    constructor() {
        this.storage = window.localStorage;
        this.KEY = "todo";
    }
    save(data) {
        let dataStr = JSON.stringify(data);
        this.storage.setItem(this.KEY, dataStr);
    }
    load() {
        let dataStr = this.storage.getItem(this.KEY);
        return dataStr ? JSON.parse(dataStr) : [];
    }
};
StorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageService);
export { StorageService };
//# sourceMappingURL=storage.service.js.map