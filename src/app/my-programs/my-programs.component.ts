import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Program } from '../program.model';
import { ProgramState } from '../program.reducer';
import { selectProgramIds } from '../program.selectors';

@Component({
  selector: 'app-my-programs',
  templateUrl: './my-programs.component.html',
  styleUrls: ['./my-programs.component.css'],
})
export class MyProgramsComponent implements OnInit {
  @Input() programIds: ReadonlyArray<String> = [];
  @Input() programs: ReadonlyArray<Program> = [];
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
