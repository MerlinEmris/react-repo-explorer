export interface Filter {
  name: string;
  value: string;
}
export interface FilterState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterValues: Filter[];
  setOrAddFilterValue: (filter: Filter) => void;
}
