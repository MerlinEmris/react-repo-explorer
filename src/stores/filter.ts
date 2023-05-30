import { StateCreator, create } from "zustand";
import { FilterState, Filter } from "./models";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type FilterStoreType = StateCreator<FilterState>;

const filterStoreTemplate: FilterStoreType = (set) => ({
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
});
const useFilterStore = create<FilterState>()(
  devtools(
    persist(filterStoreTemplate, {
      name: "filterStore",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);

export default useFilterStore;
