import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task'
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
    this.tasks = TASKS
  }
  deleteTask(task: Task) {
    // this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
    this.tasks = this.tasks.filter(t => t.id !== task.id)
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    // this.taskService.updateTaskRemidner(task).subscribe()
    let index = this.tasks.findIndex(x => x.id === task.id);
    this.tasks[index] = task
  }
  addTask(task: Task) {
    // this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
    this.tasks.push(task)
  }

}
