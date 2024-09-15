import { Eraser, Pen, Redo, Trash2, Undo } from "lucide-react";
import { FC } from "react";
import Tools from "@/utils/Tools";
import Share from "./Share";

interface HeaderProps {
  penStroke?: number;
  eraserStrokeWidth?: number;
  strokeColor?: string;
  handlePen?: () => void;
  handleErase?: () => void;
  handleUndo?: () => void;
  handleClearClick?: () => void;
  handleRedo?: () => void;
  onColorChange: (color: string) => void;
  handleEraserSliderChange?: (value: number[]) => void;
  handlePenSliderChange?: (value: number[]) => void;
}

const Header: FC<HeaderProps> = ({
  handlePenSliderChange,
  handleEraserSliderChange,
  penStroke,
  handleErase,
  handlePen,
  handleUndo,
  handleRedo,
  eraserStrokeWidth,
  handleClearClick,
  strokeColor,
  onColorChange,
}) => (
  <div className="fixed top-0 left-0 w-full bg-zinc-100 p-2 flex justify-between items-center border-b-2 border-zinc-900 z-50">
    <div className="flex gap-2 shadow-lg shadow-zinc-400 p-2 rounded-3xl px-6">
      <Tools
        icon={<Trash2 />}
        toolType="CLEAR"
        handleAction={handleClearClick}
      />
      <Tools icon={<Undo />} toolType="UNDO" handleAction={handleUndo} />
      <Tools icon={<Redo />} toolType="REDO" handleAction={handleRedo} />

      <Tools
        icon={<Pen />}
        strokeColor={strokeColor}
        labelStroke="Pencil Width"
        strokeWidth={penStroke}
        handleAction={handlePen}
        handleSliderChange={handlePenSliderChange}
        onColorChange={onColorChange}
        toolType="PEN"
      />
      <Tools
        icon={<Eraser />}
        labelStroke="Eraser Width"
        strokeWidth={eraserStrokeWidth}
        handleAction={handleErase}
        handleSliderChange={handleEraserSliderChange}
        toolType="ERASER"
      />
    </div>
    <Share/>
  </div>
);

export default Header;
