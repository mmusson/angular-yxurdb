import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '.';
import * as ProgramActions from './program.actions';
import { selectProgramEntities, selectProgramIds } from './program.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  next_id: number = 1;
  programIds$ = this.store.select(selectProgramIds);
  programs$ = this.store.select(selectProgramEntities);
  p_pipe$ = this.store.pipe()

  constructor(private store: Store) {}

  nextId(): string {
    const id = this.next_id++;
    return id.toString();
  }

  onAdd() {
    this.store.dispatch(
      ProgramActions.add({
        program: {
          id: this.nextId(),
          studyID: '1',
          label: 'Hi',
        },
      })
    );

    console.log(this.store)
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
