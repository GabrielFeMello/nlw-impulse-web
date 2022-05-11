import { Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType } from "..";
import { api } from "../../../lib/api";
import { Loading } from "./Loading";
import { ScreenshotButton } from "./ScreenshotButton";

interface IProps {
  feedbackType: FeedbackType;
  setFeedbackSent: (value: boolean) => void;
}
export function FeedbackContentStep({ feedbackType, setFeedbackSent }: IProps) {
  const [feedback, setFeedback] = useState<string>();
  const [screenshot, setScreenshot] = useState<string>();
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        comment: feedback,
        screenshot: screenshot,
      });

      setFeedbackSent(true);
      setIsSendingFeedback(false);
    } catch (error: any) {
      setIsSendingFeedback(false);
    }
    // setFeedback();
  }
  return (
    <form className="widgetFormForm" onSubmit={handleSubmitFeedback}>
      <textarea
        onChange={(e) => setFeedback(e.target.value)}
        className="widgetFormFormTextArea "
        placeholder="Conte com detalhes o que houve"
      />
      <footer className="widgetFormFormFooter">
        <ScreenshotButton
          screenshot={screenshot}
          setScreenshot={setScreenshot}
        />
        <button
          className="widgetFormFormButton"
          type="submit"
          disabled={!feedback || feedback?.length <= 0 || isSendingFeedback}
        >
          {isSendingFeedback ? <Loading /> : "Enviar Feedback"}
        </button>
      </footer>
    </form>
  );
}
