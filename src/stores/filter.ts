import { create } from "zustand";
import { SearchState, Filter } from "./models";

const useFilterStore = create<SearchState>((set) => ({
  searchTerm: "",
  setSearchTerm: (term: string) => set({ searchTerm: term }),
  filterValues: [],
  setOrAddFilterValue: (filter: Filter) =>
    set((state) => {
      const newFilter = state.filterValues.findIndex(
        (f) => filter.name == f.name
      );
      if (newFilter > 0) {
        const update = [...state.filterValues];
        update[newFilter] = filter;
        return { filterValues: update };
      } else {
        return { filterValues: [...state.filterValues, filter] };
      }
    }),
}));

export default useFilterStore;
