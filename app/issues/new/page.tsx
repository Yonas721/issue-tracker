"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface FormData {
  title: string;
  description: string;
}

export default function NewIssue() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [error, setError] = useState("");
  return (
    <div>
      {error && (
        <Callout.Root color="red" className="max-w-xl mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3 max-w-xl"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/");
          } catch (error) {
            setError("something unexpeceted occur!");
          }
        })}
      >
        <TextField.Root
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button type="submit">Submit new issue</Button>
      </form>
    </div>
  );
}
