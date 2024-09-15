import { Button } from "./ui/button";
import { Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const Share = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <Send />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex gap-4">
          <DialogTitle className="flex justify-center">
            Share Your Draw-Collab
          </DialogTitle>
          <DialogDescription className="flex justify-between">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Share to view</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Share to edit</Label>
              </div>
            </RadioGroup>
            <Button>Copy Link</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Share;
