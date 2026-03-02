import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/app/prisma";
import { Button, Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";
import IssueDetailsPage from "./IssueDetailsPage";

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
    <Grid columns={{ initial: "1", md: "2" }}>
      <Box>
        <IssueDetailsPage issue={issue} />
      </Box>

      <Box>
        <Flex gap="4" className="">
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
}
