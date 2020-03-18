import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
let TodoListComponent = class TodoListComponent {
    constructor(todoSvc) {
        this.todoSvc = todoSvc;
    }
    ngOnInit() {
        this.items = this.todoSvc.items;
    }
};
TodoListComponent = __decorate([
    Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.scss'],
        animations: [
            trigger('fade', [
                transition(':enter', [
                    style({ opacity: 0, transform: 'translateY(30px)' }),
                    animate(200, style({ opacity: 1, transform: 'translateY(0px)' }))
                ]),
                transition(':leave', [
                    animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
                ])
            ])
        ]
    })
], TodoListComponent);
export { TodoListComponent };
//# sourceMappingURL=todo-list.component.js.map