import type { Dialog } from "@chakra-ui/react";
import type { ComponentProps, ReactNode } from "react";

type DialogRootProps = ComponentProps<typeof Dialog.Root>;

export type Props = Omit<DialogRootProps, "open" | "onOpenChange"> & {
  title?: string;
  description?: string;
  body?: ReactNode;
  icon?: ReactNode;
  footerButtons?: ReactNode;
  generateFooterButtons?: (isLoading?: boolean) => ReactNode;
};
