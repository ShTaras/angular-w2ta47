import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let TodoServiceService = class TodoServiceService {
    constructor(storageSvc) {
        this.storageSvc = storageSvc;
        this.subj = new BehaviorSubject([]);
        this.todos = [];
        this.sort = 'all';
        this.countTodo = 0;
        this.countDoneTodo = 0;
        this.load();
    }
    get items() {
        return this.subj.asObservable();
    }
    load() {
        this.todos = this.storageSvc.load();
        this.subj.next(this.todos);
    }
    save(data) {
        this.storageSvc.save(data);
    }
    addTodo(todoText) {
        if (todoText.trim().length === 0) {
            return;
        }
        this.todos.unshift({
            date: new Date(),
            importance: 1,
            text: todoText,
            done: false,
            id: this.createId()
        });
        this.subj.next(this.todos);
    }
    createId() {
        return `f${(+new Date).toString(16)}`;
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.subj.next(this.todos);
    }
    upImportance(todo) {
        if (todo.importance < 5)
            todo.importance++;
        this.subj.next(this.todos);
    }
    downImportance(todo) {
        if (todo.importance > 1)
            todo.importance--;
        this.subj.next(this.todos);
    }
    done(todo) {
        todo.done = !todo.done;
        this.subj.next(this.todos);
    }
    changeSortDate() {
        if (this.sort = 'date') {
            this.sort = 'all';
        }
        else {
            this.sort = 'date';
            this.todosSort();
        }
    }
    changeSortPriority() {
        if (this.sort = 'done') {
            this.sort = 'all';
        }
        else {
            this.sort = 'done';
            this.todosSort();
        }
    }
    changeSortDone() {
        this.sort = 'done';
        this.todosSort();
    }
    todosSort() {
        switch (this.sort) {
            case 'all':
                this.todos = this.todos;
                break;
            case 'done':
                this.todos = this.todos.filter((todo) => todo.done);
                break;
            case 'importance':
                this.todos = this.todos.sort((prevTodo, nextTodo) => nextTodo.importance - prevTodo.importance);
                break;
            case 'date':
                this.todos = this.todos.sort((prevTodo, nextTodo) => Number(nextTodo.date) - Number(prevTodo.date));
                break;
            default:
                break;
        }
    }
};
TodoServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TodoServiceService);
export { TodoServiceService };
//# sourceMappingURL=todo-service.service.js.map