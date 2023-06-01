import { StateCreator, create } from "zustand";
import { UserState } from "../models";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type UserStoreType = StateCreator<UserState>;

const userStoreTemplate: UserStoreType = (set) => ({
  user: null,
  setUser: (data) => set({ user: data }),
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
