import { __decorate } from "tslib";
import { TodoServiceService } from './services/todo-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { HeaderComponent } from './header/header.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            TodoListComponent,
            TodoitemComponent,
            HeaderComponent,
        ],
        imports: [
            BrowserModule,
            FormsModule,
            BrowserAnimationsModule
        ],
        providers: [TodoServiceService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map