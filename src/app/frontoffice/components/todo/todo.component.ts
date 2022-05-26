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
  taskTitle = "";
  taskStatus = "";
  statusSelected = "";
  lastIndex = 0;

  deleteTask(taskId: number) {
    // const taskIndex = this.tasks?.findIndex((task) => task.id === taskId);
    this.taskService.deleteTask(taskId).pipe(
      tap(() => {
        this.router.navigateByUrl("/todo");
      })
    ).subscribe();
  }

  addTask() {
    // const lastIndex = this.tasks.length - 1;
    const id = Math.random();
    /**
     * this.tasks.push({title: this.taskTitle, id, status: this.taskStatus, description: ""});
     * this.taskTitle = "";
     */
    this.taskService.addTask({title: this.taskTitle, id, status: this.taskStatus, description: ""}).pipe(
      tap(() => {
        this.router.navigateByUrl("/todo");
      })
    ).subscribe();
  }

  /**
   * filterTask()
   */
  getAllTask() {
       this.tasks$ = this.taskService.getTasks();
  }

  /**
   * ngOnit
   */
  ngOnInit(): void {
    this.getAllTask();
  }

  filterTask(status: string) {
    this.tasks$ = this.taskService.getTaskByStatus(status);
  }
}
