import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(todoSvc) {
        this.todoSvc = todoSvc;
        this.title = 'TodoList';
    }
    ngOnInit() {
        this.todoSvc.items.subscribe((data) => {
            console.log(data);
            this.todoSvc.save(data);
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map