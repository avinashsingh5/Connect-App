import { create } from "zustand";

export const useNavigationStore = create((set) => ({
  previousPath: null,
  setPreviousPath: (path) => set({ previousPath: path }),
}));

export default useNavigationStore;
