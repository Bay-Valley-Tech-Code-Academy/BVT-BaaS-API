import { CopyIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProjectModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          New Project
          <span className="ml-2">
            <PlusIcon className="size-4" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Please enter a name for this project
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="project">Project Name</Label>
            <Input id="project" placeholder="Project 1" />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" size="lg">
            Cancel
          </Button>
          <Button size="lg">Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
