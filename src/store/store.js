import create from "zustand";

const actions = (set) => ({
  add: (beskjed) =>
    set((state) => ({
      beskjederList: [...state.beskjederList, beskjed],
    })),
  addList: (beskjedListe) =>
    set((state) => ({
      beskjederList: [...beskjedListe],
    })),
  remove: (beskjed) =>
    set((state) => ({
      beskjederList: state.beskjederList.filter((b) => b.eventId !== beskjed.eventId),
    })),
  clear: () =>
    set({
      beskjederList: [],
    }),
});

const useStore = create((set) => ({
  beskjederList: [],
  ...actions(set),
}));

export default useStore;
