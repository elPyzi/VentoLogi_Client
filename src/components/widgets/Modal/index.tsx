"use client";

import { Dialog, Portal } from "@chakra-ui/react";
import type { Props } from "./types";

export const Modal = ({ title, description, body, icon, footerButtons, ...rest }: Props) => {
  return (
    <Dialog.Root {...rest}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content zIndex={99999}>
            <Dialog.Header>
              {icon && <span role="img">{icon}</span>}
              {title && <Dialog.Title>{title}</Dialog.Title>}
            </Dialog.Header>
            <Dialog.Body>
              {description && <Dialog.Description>{description}</Dialog.Description>}
              {body}
            </Dialog.Body>
            {footerButtons && <Dialog.Footer>{footerButtons}</Dialog.Footer>}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
