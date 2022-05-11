import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";
interface IProps {
  screenshot: string | undefined;
  setScreenshot: (value: string | undefined) => void;
}
export function ScreenshotButton({ screenshot, setScreenshot }: IProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    setScreenshot(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right-bottom",
          backgroundSize: 100,
        }}
        className="removeScreenshotButton"
        onClick={() => setScreenshot(undefined)}
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      onClick={handleTakeScreenshot}
      type="button"
      className="widgetFormFormPrint"
      disabled={isTakingScreenshot}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="widgetFormFormPrintIcon" />
      )}
    </button>
  );
}
