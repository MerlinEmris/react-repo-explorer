import { create } from "zustand";


interface Filter {
  name: string;
  value: string;
}
interface SearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterValues: Filter[];
  setOrAddFilterValue: (filter: Filter) => void;
}


const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  setSearchTerm: (term: string) => set({ searchTerm: term }),
  filterValues: [],
  setOrAddFilterValue: (filter:Filter) =>
    set((state) => {
      const newFilter = state.filterValues.findIndex((f)=>(filter.name == f.name))
      if(newFilter>0){
        const update = [...state.filterValues]
        update[newFilter]=filter
        return {filterValues: update}
      }else{
        return {filterValues: [...state.filterValues, filter]}
      }

    }),
}));

export default useSearchStore;
