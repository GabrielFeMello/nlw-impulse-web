import React from "react";
import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="widgetDiv">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="widgetButton group">
        <ChatTeardropDots size="200" weight="light" className="widgetIcon" />

        <span className="widgetSpan ">
          <span className="widgetSpace"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
