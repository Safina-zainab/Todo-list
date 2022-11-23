import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  title = " MY Todo List";
  tasklist: string[] = [
    'complete Angular Todo list App',
    'Complete TypeScript Cousre by today '
  ]
  
  
  constructor() {
    
  }

  ngOnInit(): void {

  }
  addTodo(e: any) {
    this.tasklist.unshift(e.value);

  }

  remtodo(e: any) {
    this.tasklist.splice(e, 1);
  }


  // edittodo(e: any) {
  
  // }
  
}