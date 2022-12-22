export interface TransactionData {
  title: string;
  timestamp: string;
  type: "expense" | "income";
  total: number;
}

export interface StoreType {
  balance: number;
  transaction: TransactionData[];
  addBalance: (transaction: TransactionData) => void;
  addExpense: (transaction: TransactionData) => void;
}
