import type {Column} from "@dummies/Table/types";

export type TableHeaderProps<T> = {
  columns: Column<T>[];
  onSort?: (key: keyof T) => void;
  sortKey?: keyof T;
  sortDirection?: "asc" | "desc";
};
