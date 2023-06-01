import { useQuery } from "@apollo/client";
import { StateCreator, create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { Pagination, Repository, RepositoryState } from "../models";
import { GET_REPOSITORIES } from "../apollo/repositories";

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
