"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
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
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@/app/generated/prisma/client";

type FormData = z.infer<typeof createIssueSchema>;

export default function IssueForm({issue}:{issue?:Issue}) {
  const [isSubmitting, setIsSubmmiting] = useState(false);

  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmmiting(true);
      await axios.post("/api/issues", data);
      router.push("/");
    } catch (error) {
      setIsSubmmiting(false);
      setError("something unexpeceted occur!");
    }
  });

  return (
    <div>
      {error && (
        <Callout.Root color="red" className="max-w-xl mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3 max-w-xl" onSubmit={onSubmit}>
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        />
        {errors.title && <ErrorMessage message={errors.title.message} />}

        <Controller
          name="description"
          defaultValue={issue?.description}
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        {errors.description && (
          <ErrorMessage message={errors.description.message} />
        )}

        <Button type="submit" disabled={isSubmitting}>
          Submit new issue{isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
}
