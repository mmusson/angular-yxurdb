import { createAction, props } from '@ngrx/store';
import { Program } from './program.model';

export const load = createAction(
  '[Program] Load',
  props<{ programs: Program[] }>()
);

export const add = createAction(
  '[Program] Add',
  props<{ program: Program }>()
);
