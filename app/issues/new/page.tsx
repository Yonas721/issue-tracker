"use client";

import { Button,TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";

export default function NewIssue() {
  return (
    <div className="space-y-3 max-w-xl">
      <TextField.Root placeholder="Title">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <SimpleMDE placeholder="Description"/>
      <Button>Submit new issue</Button>
    </div>
  );
}
