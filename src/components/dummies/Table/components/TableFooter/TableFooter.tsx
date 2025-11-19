"use client";

import {Table as ChakraTable} from "@chakra-ui/react";
import type {TableFooterProps} from "./types";

export const TableFooter = ({ footer }: TableFooterProps) => (
  <ChakraTable.Footer>
    <ChakraTable.Row>{footer}</ChakraTable.Row>
  </ChakraTable.Footer>
);
