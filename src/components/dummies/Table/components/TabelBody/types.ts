import type {Column} from "@dummies/Table/types";

export type TableBodyProps<T> = {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  rowKey?: keyof T;
};
