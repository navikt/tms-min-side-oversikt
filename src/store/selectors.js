export const selectBeskjederList = (state) => state.beskjederList;

export const selectAddBeskjederList = (state) => state.addList;

export const selectAddBeskjed = (state, beskjed) => state.add(beskjed);

export const selectRemoveBeskjed = (state) => state.remove;

export const selectClear = (state) => state.clear;
