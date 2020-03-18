import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(todoSvc) {
        this.todoSvc = todoSvc;
    }
    ngOnInit() {
        this.todoText = '';
    }
    addTodo() {
        if (this.todoText.trim().length === 0) {
            return;
        }
        this.todoSvc.addTodo(this.todoText);
        this.todoText = '';
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map