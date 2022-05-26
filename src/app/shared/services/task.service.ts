import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Task} from "../models/task.model";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {
  }

  /**
   * get all task
   */
  getTasks(): Observable<Task[]> {
    console.log("getTasks()");
    return this.http.get<Task[]>("http://localhost:3000/tasks");
  }

  /**
   * get one task
   * @param taskId
   */
  getTaskById(taskId: number): Observable<Task> {
    console.log("getTaskById()");
    return this.http.get<Task>(`http://localhost:3000/tasks/${taskId}`);
  }
  /**
   * get all task status
   * @param status
   */
  getTaskByStatus(status: string): Observable<Task[]> {
    console.log("getTaskByStatus()");
    return this.http.get<Task[]>(`http://localhost:3000/tasks?status=${status}`);
  }


  /**
   *
   * @param taskId
   */
  deleteTask(taskId: number) {
    console.log("getTaskById()");
    return this.http.delete<Task>(`http://localhost:3000/tasks/${taskId}`);
  }

  /**
   *
   * @param formTask
   */
  addTask(formTask: Task) {
    console.log("addTask()");
    console.log(formTask);
    return this.getTasks().pipe(
      map(task => [...task].sort((a,b) => a.id - b.id)),
      map(sortedTask => sortedTask[sortedTask.length - 1]),
      map(previousTask => ({
        ...formTask,
        id: previousTask.id + 1
      })),
      switchMap(newTask => this.http.post<Task>(
        'http://localhost:3000/tasks',
        newTask)
      )
    );
  }
}
