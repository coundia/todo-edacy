import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import {take, tap} from "rxjs/operators";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TaskService', () => {
  let service: TaskService;
  let originalTimeout: number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TaskService);
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
  });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  /**
   * Test get all taks
   */
  it("Les taches sont vides.",  done=> {
     service.getTasks()
       .pipe(
         tap(v =>{console.log(v)})
       )
       .subscribe();
    done();
  })
});
