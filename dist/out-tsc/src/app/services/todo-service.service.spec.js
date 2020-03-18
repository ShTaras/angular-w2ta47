import { TestBed } from '@angular/core/testing';
import { TodoServiceService } from './todo-service.service';
describe('TodoServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TodoServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=todo-service.service.spec.js.map