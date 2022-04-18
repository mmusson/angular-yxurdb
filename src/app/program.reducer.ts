import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Program } from './program.model';
import * as ProgramActions from './program.actions';

interface ExtendedState {
  loading: boolean;
  dirtyProgram: Program | null;
}

export type ProgramState = EntityState<Program> & ExtendedState;

export const programAdapter = createEntityAdapter<Program>();

export const initialState: ProgramState =
  programAdapter.getInitialState<ExtendedState>({
    loading: false,
    dirtyProgram: null,
  });

// setAll<S extends EntityState<T>>(entities: T[], state: S): S;
export const programReducer = createReducer(
  initialState,

  on(ProgramActions.load, (state, { programs }) => {
    console.log(state, programs);
    return programAdapter.setAll(programs, state);
  }),

  on(ProgramActions.add, (state, { program }) => {
    return programAdapter.addOne(program, state);
  })
);
