import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }
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
}
