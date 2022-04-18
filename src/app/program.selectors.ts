import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProgramState, programAdapter } from './program.reducer';

export const selectProgramState =
  createFeatureSelector<ProgramState>('programState');

const { selectIds, selectEntities, selectAll, selectTotal } =
  programAdapter.getSelectors();

export const selectProgramIds = createSelector(selectProgramState, selectIds);
export const selectProgramEntities = createSelector(
  selectProgramState,
  selectEntities
);
export const selectAllPrograms = createSelector(selectProgramState, selectAll);
export const selectProgramTotal = createSelector(
  selectProgramState,
  selectTotal
);
