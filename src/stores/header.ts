import { create } from "zustand";

interface IHeaderStore {
  headerTitle: string;
  setHeaderTitle: (title: string) => void;
  resetHeaderTitle: () => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
  headerTitle: "HEADER",
  setHeaderTitle: (title: string) => {
    set({ headerTitle: title });
  },
  resetHeaderTitle: () => set({ headerTitle: "HEADER" }),
}));
