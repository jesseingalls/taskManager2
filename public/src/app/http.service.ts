import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post('/api/users/login', user);
  }

  logout() {
    return this.http.get('/api/users/logout');
  }

  createUser(user) {
    return this.http.post('/api/users', user);
  }
  getCurrentUser() {
    return this.http.get('/api/users/current');
  }
  updateTask(userId, taskId, task) {
    return this.http.put('/api/users/' + userId + '/tasks/' + taskId, task);
  }

  createTask(id, task) {
    return this.http.post('/api/users/' + id + '/tasks', task);
  }

  deleteTask(userId, taskId, task) {
    return this.http.post('/api/users/' + userId + '/tasks/' + taskId, task);
  }
}
