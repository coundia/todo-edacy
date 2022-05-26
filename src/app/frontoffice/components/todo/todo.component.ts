import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../../shared/services/task.service";
import {Observable} from "rxjs";
import {Task} from "../../../shared/models/task.model";
import {tap} from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService, private router: Router) {

  }
  title = "TODO";
  task=new Task() ;

  /**
   * delete a task
   * @param taskId
   */
  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).pipe(
      tap(() => {
        this.getAllTask();
      })
    ).subscribe();
  }

  /**
   *  Add a task
   */
  addTask() {
    this.taskService.addTask(this.task).pipe(
      tap(() => {
        this.getAllTask();
        // this.router.navigateByUrl("/todo");
      })
    ).subscribe();
  }

  /**
   * get al task
   * filterTask()
   */
  getAllTask() {
       this.tasks$ = this.taskService.getTasks();
  }

  /**
   * init funct
   */
  ngOnInit(): void {
    this.getAllTask();
  }

  /**
   * filtrer par stats
   * @param status
   */
  filterTask(status: string) {
    this.tasks$ = this.taskService.getTaskByStatus(status);
  }
}
