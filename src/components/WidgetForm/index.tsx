import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { ArrowLeft } from "phosphor-react";
import { FeedbackEndStep } from "./Steps/FeedbackEndStep";

export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: { source: bugImageUrl, alt: "Icone de Inseto" },
  },
  IDEA: {
    title: "Ideia",
    image: { source: ideaImageUrl, alt: "Ícone de Lâmpada" },
  },
  OTHER: {
    title: "Outro",
    image: { source: otherImageUrl, alt: "Ícone de Balão de Pensamento" },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>();
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(undefined);
    setFeedbackSent(false);
  }

  return (
    <div className="widgetForm">
      <header>
        {feedbackType && !feedbackSent && (
          <button
            type="button"
            className="widgetFormBackButton"
            onClick={handleRestartFeedback}
          >
            <ArrowLeft />
          </button>
        )}

        <span className="widgetFormLead">
          {feedbackSent
            ? "Obrigado pelo seu Feedback"
            : feedbackType || "Deixe seu feedback"}
        </span>
        <CloseButton />
      </header>

      <div className="widgetFormBody">
        {feedbackSent ? (
          <FeedbackEndStep handleRestartForm={handleRestartFeedback} />
        ) : !feedbackType ? (
          <FeedbackTypeStep setFeedbackType={setFeedbackType} />
        ) : (
          <FeedbackContentStep
            feedbackType={feedbackType}
            setFeedbackSent={setFeedbackSent}
          />
        )}
      </div>

      <footer className="widgetFormFooter">
        <span>
          Feito com ♥ pela{" "}
          <a href="https://rocketseat.com.br" className="widgetFormFooterLink">
            Rocketseat
          </a>
        </span>
      </footer>
    </div>
  );
}
