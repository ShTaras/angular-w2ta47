import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TodoitemComponent = class TodoitemComponent {
    constructor(todoSvc) {
        this.todoSvc = todoSvc;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], TodoitemComponent.prototype, "todo", void 0);
TodoitemComponent = __decorate([
    Component({
        selector: 'app-todoitem',
        templateUrl: './todoitem.component.html',
        styleUrls: ['./todoitem.component.scss']
    })
], TodoitemComponent);
export { TodoitemComponent };
//# sourceMappingURL=todoitem.component.js.map