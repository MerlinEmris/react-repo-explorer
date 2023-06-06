import { StateCreator, create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { Pagination, Repository, RepositoryState } from "../types/store.types";

type RepositoryStoreType = StateCreator<RepositoryState>;

const repositoryStoreTemplate: RepositoryStoreType = (set) => ({
  repositories: [],
  setRepository: (repositories: Repository[]) =>
    set({ repositories: repositories }),

  pageInfo: {
    endCursor: "",
    hasNextPage: false,
    startCursor: "",
    hasPreviousPage: false,
  },
  setPageInfo: (info: Pagination) => set({ pageInfo: info }),

  repositoryCount: 0,
  setRepositoryCount: (count: number) => set({ repositoryCount: count }),

  currentPageNumber: 0,
  setCurrentPageNumber: (pageNumber: number) =>
    set({ currentPageNumber: pageNumber }),
});
const useRepositoryStore = create<RepositoryState>()(
  devtools(
    persist(repositoryStoreTemplate, {
      name: "repositoryStore",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);

export default useRepositoryStore;
