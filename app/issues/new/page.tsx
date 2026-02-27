"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function NewIssue() {

  return (
    <div className="space-y-3 max-w-xl">
      <TextField.Root placeholder="Title">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit new issue</Button>
    </div>
  );

}
