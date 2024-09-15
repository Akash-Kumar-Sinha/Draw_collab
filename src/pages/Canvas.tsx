import Header from "@/components/Header";
import clsx from "clsx";
import { useRef, useState } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";

const Canvas = () => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const [strokeColor, setStrokeColor] = useState<string>("black");
  const [penStrokeWidth, setPenStrokeWidth] = useState<number>(2);
  const [eraserStrokeWidth, setEraserStrokeWidth] = useState<number>(2);
  const [eraseMode, setEraseMode] = useState<boolean>(false);
  const [penMode, setPenMode] = useState<boolean>(true);

  const handleColorChange = (color: string) => setStrokeColor(color);
  const handlePenSliderChange = (value: number[]) => setPenStrokeWidth(value[0]);
  const handleEraserSliderChange = (value: number[]) => setEraserStrokeWidth(value[0]);
  const handleErase = () => {
    setEraseMode(true);
    setPenMode(false);
    canvasRef.current?.eraseMode(true);
  };
  const handlePen = () => {
    setEraseMode(false);
    setPenMode(true);
    canvasRef.current?.eraseMode(false);
  };
  const handleUndo = () => canvasRef.current?.undo();
  const handleRedo = () => canvasRef.current?.redo();
  const handleClearClick = () => canvasRef.current?.clearCanvas();

  return (
    <div className="h-full overflow-auto">
      <Header
        handlePenSliderChange={handlePenSliderChange}
        strokeColor={strokeColor}
        penStroke={penStrokeWidth}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        onColorChange={handleColorChange}
        handleErase={handleErase}
        handleClearClick={handleClearClick}
        handlePen={handlePen}
        eraserStrokeWidth={eraserStrokeWidth}
        handleEraserSliderChange={handleEraserSliderChange}
      />
      <ReactSketchCanvas
        ref={canvasRef}
        className={clsx("h-screen m-2", {
          "cursor-wait": eraseMode,
          "cursor-crosshair": penMode,
        })}
        eraserWidth={eraserStrokeWidth}
        strokeWidth={penStrokeWidth}
        strokeColor={strokeColor}
        allowOnlyPointerType="all"
        withTimestamp
      />
    </div>
  );
};

export default Canvas;
