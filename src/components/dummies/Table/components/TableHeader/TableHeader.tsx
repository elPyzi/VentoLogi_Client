"use client";

import {HStack, Table as ChakraTable, Text} from "@chakra-ui/react";
import {SORT_DIRECTION} from "@/constants";
import {SortIcon} from "../SortIcon";
import type {TableHeaderProps} from "./types";

export const TableHeader = <T,>({
  columns,
  onSort,
  sortKey,
  sortDirection,
}: TableHeaderProps<T>) => (
  <ChakraTable.Header>
    <ChakraTable.Row>
      {columns.map((column) => {
        const isSortable = !!column.sortable && typeof onSort === "function";
        const isActive = sortKey === column.key;

        return (
          <ChakraTable.ColumnHeader
            key={String(column.key)}
            cursor={isSortable ? "pointer" : "default"}
            aria-sort={
              isActive
                ? sortDirection === SORT_DIRECTION.ascend
                  ? "ascending"
                  : "descending"
                : undefined
            }
          >
            <HStack>
              <Text>{column.label}</Text>
              {isSortable && <SortIcon dir={isActive ? (sortDirection ?? null) : null} />}
            </HStack>
          </ChakraTable.ColumnHeader>
        );
      })}
    </ChakraTable.Row>
  </ChakraTable.Header>
);
