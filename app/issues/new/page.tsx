"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function NewIssue() {

  return (
    <div className="space-y-3">
      <TextField.Root>
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="add a description..." />
      <Button>Submit new issue</Button>
    </div>
  );

}
