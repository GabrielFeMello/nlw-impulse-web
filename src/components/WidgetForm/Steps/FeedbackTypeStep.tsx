import { FeedbackType, feedbackTypes } from "..";
interface IProps {
  setFeedbackType: (value: FeedbackType) => void;
}
export function FeedbackTypeStep({ setFeedbackType }: IProps) {
  return (
    <>
      {Object.entries(feedbackTypes).map(([key, item]) => {
        return (
          <button
            className="widgetFormBodyButton"
            onClick={() => setFeedbackType(key as FeedbackType)}
            type="button"
            key={key}
          >
            <img src={item.image.source} alt={item.image.alt} />
            <span>{item.title}</span>
          </button>
        );
      })}
    </>
  );
}
