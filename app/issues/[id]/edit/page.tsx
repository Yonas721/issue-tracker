import prisma from "@/app/prisma";
import IssueForm from "../../_component/IssueForm";
import { notFound } from "next/navigation";

export default async function EditIssue({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) {
    notFound();
  }

  return <IssueForm issue={issue} />;
}
