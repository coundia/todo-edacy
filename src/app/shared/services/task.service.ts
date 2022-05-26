import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Task} from "../models/task.model";

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
   * @param task
   */
  addTask(task: { description: string; id: number; title: string; status: string }) {
    console.log("addTask()");
    console.log(task);
    return this.http.post<Task>("http://localhost:3000/tasks", {task});
  }

  /**
   *
   * @param taskId
   */
  deleteTask(taskId: number) {
    console.log("getTaskById()");
    return this.http.delete<Task>(`http://localhost:3000/tasks/${taskId}`);
  }
}
