import { StateCreator, create } from "zustand";
import { UserState } from "../types/store.types";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type UserStoreType = StateCreator<UserState>;

const userStoreTemplate: UserStoreType = (set) => ({
  user: null,
  token: null,
  setUser: (data) => set({ user: data }),
  setToken: (data) => set({ token: data }),
});
const useUserStore = create<UserState>()(
  devtools(
    persist(userStoreTemplate, {
      name: "userStore",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);

export default useUserStore;
