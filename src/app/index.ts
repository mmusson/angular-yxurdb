import { ActionReducerMap } from '@ngrx/store';
import { programReducer, ProgramState } from './program.reducer';

export interface AppState {
  programState: ProgramState;
}

export const appReducers: ActionReducerMap<AppState> = {
  programState: programReducer,
};
