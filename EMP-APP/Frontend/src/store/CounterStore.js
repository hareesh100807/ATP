import { create } from "zustand";

export const useCounterStore = create((set) => ({
  //state
  newCounter: 0,
  newCounter1: 100,
  //funcn to modify the state
  incrementCounter: () =>
    set((state) => ({ newCounter: state.newCounter + 1 })),
  decrementCounter: () =>
    set((state) => ({ newCounter: state.newCounter - 1 })),
  reset: () => set({ newCounter: 0 }),
  incrementCounter1: () =>
    set((state) => ({ newCounter1: state.newCounter1 + 1 })),
  decrementCounter1: () =>
    set((state) => ({ newCounter1: state.newCounter1 - 1 })),
  reset1: () => set({ newCounter1: 100 }),

  //funcn to change newcounter to 500
  changeCounter: () => set({ newCounter: 500 }),

  //function to decrement newCounter1 by 20
  decrement: () => set((state) => ({ newCounter1: state.newCounter1 - 20 })),

  //add user state(name,, age, email)
  user: { name: "Hareesh", age: 20, email: "hareesh@mail.com" },
  //function to change email
  changeemail: () => set({ ...user, email: "venkat@mail.com" }),
  //function to change name and age
  changeNameAndAge: () => set({ ...user, name: "Venkat", age: 21 }),
}));
