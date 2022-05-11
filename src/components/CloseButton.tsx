import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="closeButton "
      title="Fechar formulário de Feedback"
    >
      <X className="closeButtonIcon" weight="bold" />
    </Popover.Button>
  );
}
