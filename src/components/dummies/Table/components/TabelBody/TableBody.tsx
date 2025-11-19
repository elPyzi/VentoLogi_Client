"use client";

import {Center, Spinner, Table as ChakraTable} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import type {TableBodyProps} from "./types";

export const TableBody = <T,>({ data, columns, isLoading, rowKey }: TableBodyProps<T>) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <ChakraTable.Body>
        <ChakraTable.Row>
          <ChakraTable.Cell colSpan={columns.length}>
            <Center py={6}>
              <Spinner size="sm" />
            </Center>
          </ChakraTable.Cell>
        </ChakraTable.Row>
      </ChakraTable.Body>
    );
  }

  if (!data.length) {
    return (
      <ChakraTable.Body>
        <ChakraTable.Row>
          <ChakraTable.Cell colSpan={columns.length}>
            <Center py={6}>{t("emptyData")}</Center>
          </ChakraTable.Cell>
        </ChakraTable.Row>
      </ChakraTable.Body>
    );
  }

  return (
    <ChakraTable.Body>
      {data.map((row, index) => {
        const key = rowKey ? String(row[rowKey as keyof T & string]) : `row-${index}`;

        return (
          <ChakraTable.Row key={key}>
            {columns.map((col) => {
              const value = row[col.key];
              return (
                <ChakraTable.Cell key={String(col.key)}>
                  {col.render ? col.render(value, row) : (value as any)}
                </ChakraTable.Cell>
              );
            })}
          </ChakraTable.Row>
        );
      })}
    </ChakraTable.Body>
  );
};
