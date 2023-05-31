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

export interface RepositoryState {
  repositories: Repository[];
  pageInfo: Pagination;
  setRepository: (repos: Repository[]) => void;
  setPageInfo: (pInfo: Pagination) => void;
  // repositoryDetail: RepositoryDetail;
}

export interface Repository {
  id: string;
  name: string;
  url: string;
  stargazerCount: number;
  updatedAt: string;
}

// export interface RepositoryDetail{

// }

export interface Pagination {
  startCursor: string;
  hasNextPage: boolean;
  endCursor: string;
  hasPreviousPage: boolean;
}
