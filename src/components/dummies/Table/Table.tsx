"use client";

import {Table as ChakraTable} from "@chakra-ui/react";
import {TableBody, TableFooter, TableHeader} from "@dummies/Table/components";
import type {TableProps} from "./types";

export const Table = <T,>({
  columns,
  data,
  caption,
  isLoading = false,
  variant = "outline",
  rowKey,
  onSort,
  sortKey,
  sortDirection,
  footer,
}: TableProps<T>) => {
  return (
    <ChakraTable.Root size="sm" variant={variant} stickyHeader interactive>
      {caption && (
        <ChakraTable.Caption captionSide={caption.side}>{caption.text}</ChakraTable.Caption>
      )}
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
      />
      <TableBody columns={columns} data={data} isLoading={isLoading} rowKey={rowKey} />
      {footer && <TableFooter footer={footer} />}
    </ChakraTable.Root>
  );
};
