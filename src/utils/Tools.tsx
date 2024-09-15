import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { FC, useState, useRef, MouseEvent } from "react";
import { HexColorPicker } from "react-colorful";
import { TOOL } from "./Type";

interface ToolsProps {
  labelStroke?: string;
  icon: JSX.Element;
  strokeWidth?: number;
  strokeColor?: string;
  handleAction?: () => void;
  onColorChange?: (color: string) => void;
  handleSliderChange?: (value: number[]) => void;
  toolType: TOOL;
}

const Tools: FC<ToolsProps> = ({
  handleSliderChange,
  strokeWidth,
  handleAction,
  icon,
  labelStroke,
  strokeColor,
  onColorChange,
  toolType,
}) => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const toolRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setShowDialog(true);
  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    if (!toolRef.current?.contains(e.relatedTarget as Node)) {
      setShowDialog(false);
    }
  };

  return (
    <div
      className="relative group"
      ref={toolRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleAction}
    >
      <Button
        onClick={handleAction}
        className="flex flex-col items-center text-sm p-2"
      >
        {icon}
      </Button>
      {showDialog && (toolType === "PEN" || toolType === "ERASER") && (
        <div
          className="absolute flex flex-col justify-center bg-zinc-800 items-center mt-2 right-0 w-64 text-zinc-50 border border-gray-300 shadow-lg p-4 rounded-lg z-10 space-y-4"
          onMouseLeave={handleMouseLeave}
        >
          {toolType === "PEN" && (
            <>
              <span>
                {labelStroke}: {strokeWidth}
              </span>
              <Slider
                className="bg-zinc-50 rounded"
                defaultValue={[strokeWidth ?? 1]}
                min={2}
                max={100}
                step={1}
                onValueChange={handleSliderChange}
              />
              {onColorChange && (
                <HexColorPicker color={strokeColor} onChange={onColorChange} />
              )}
            </>
          )}
          {toolType === "ERASER" && (
            <>
              <span>
                {labelStroke}: {strokeWidth}
              </span>
              <Slider
                className="bg-zinc-50 rounded"
                defaultValue={[strokeWidth ?? 1]}
                min={2}
                max={100}
                step={1}
                onValueChange={handleSliderChange}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Tools;
