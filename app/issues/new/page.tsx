"use client";

import { Button, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
interface FormData {
  title: string;
  description: string;
}

export default function NewIssue() {
  const router = useRouter();
  const { register, control,handleSubmit ,formState:{errors}} = useForm<FormData>();

  return (
    <form
      className="space-y-3 max-w-xl"
      onSubmit={handleSubmit(async(data) => {
        try {
          await axios.post("/api/issues", data);
          router.push("/");
        } catch (error) {
          console.log(error);
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
  );
}
