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

export interface UserState {
  user: User | null;
  setUser: (data: User) => void;
  token: string | null;
  setToken: (data: string) => void;
}

export interface Repository {
  id: string;
  name: string;
  url: string;
  stargazerCount: number;
  updatedAt: string;
}
export interface Owner {
  id: string;
  avatarUrl: string;
  resourcePath: string;
}

export interface Language {
  name: string;
  color: string;
  id: string;
}

export interface RepositoryDetail {
  id: string;
  name: string;
  url: string;
  stargazerCount: number;
  updatedAt: string;
  owner: Owner;
  languages: {
    nodes: Language[];
  };
  description: string;
}

export interface User {
  avatarUrl: string;
  email: string;
  id: string;
  name: string;
}

export interface Pagination {
  startCursor: string;
  hasNextPage: boolean;
  endCursor: string;
  hasPreviousPage: boolean;
}
