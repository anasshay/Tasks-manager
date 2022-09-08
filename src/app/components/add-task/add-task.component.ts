import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  showForm: boolean = false;
  subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showForm = value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please enter a text');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.emptyFormFields();
  }

  emptyFormFields() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
