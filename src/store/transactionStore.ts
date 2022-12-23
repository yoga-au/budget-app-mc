import create from "zustand";
import { persist } from "zustand/middleware";

import type { StoreType } from "../types/transaction";

export const useTransactionStore = create<StoreType>()(
  persist(
    (set, get) => {
      return {
        balance: 0,
        transaction: [],
        addBalance: (transaction) =>
          set({
            balance: get().balance + transaction.total,
            transaction: [transaction, ...get().transaction],
          }),
        addExpense: (transaction) =>
          set({
            balance: get().balance - transaction.total,
            transaction: [transaction, ...get().transaction],
          }),
      };
    },
    {
      name: "budget-app-mc",
    }
  )
);
