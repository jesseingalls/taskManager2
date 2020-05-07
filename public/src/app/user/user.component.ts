import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpService, private router: Router) { }
  currentUser: any;
  task: any;
  tasks: any;
  errors: any = {};
  completed = false;

  ngOnInit() {
    this.currentUser = this.http.getCurrentUser()
      .subscribe((response: any) => {
        this.currentUser = response.user;
        // console.log(this.currentUser.tasks);
        if (response.user === null) {
          this.router.navigate(['/']);
        }
        if (response.session === null) {
          this.router.navigate(['/']);
        }

      });
  }

  addTask(form: NgForm) {
    this.task = {title: form.value.title, description: form.value.description, completed: false};
    this.http.createTask(this.currentUser._id, this.task)
      .subscribe((response: any) => {
        if (response.hasOwnProperty('errors')) {
          this.errors = response.errors;
        } else {
          this.currentUser.tasks.push(this.task);
          console.log('success');
        }
        if (form.valid) {
          form.reset();
        }
      });
  }

  updateTask(userId, taskId, task) {
    task.completed = true;
    this.http.updateTask(this.currentUser._id, task._id, task)
      .subscribe((response: any) => {
        if (response.hasOwnProperty('errors')) {
          this.errors = response.errors;
        } else {
          console.log('updated');
        }
      });
  }

}
