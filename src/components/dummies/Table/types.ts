import type {ReactNode} from "react";
import type {SortDirection} from "@/models";

export type Column<T> = {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

export type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  caption?: {
    side?: "bottom" | "top";
    text: string;
  };
  isLoading: boolean;
  variant: "line" | "outline";
  onSort?: (key: keyof T) => void;
  sortKey?: keyof T;
  sortDirection?: SortDirection;
  footer?: ReactNode | string;
  rowKey?: keyof T;
};
