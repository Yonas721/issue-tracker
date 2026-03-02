import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/app/prisma";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    // we are parsing the id becuase it comes as a string

    where: { id: parseInt(id) },
  });

  if (!issue) {
    // this will triggert the rendering of the nearest not-found.tsx component
    notFound();
  }

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3 items-center my-4">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.created_at.toDateString()}</Text>
      </Flex>

      <Card className="prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
}
