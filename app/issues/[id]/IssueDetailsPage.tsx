import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@/app/generated/prisma/browser";
import {Card, Flex, Heading,Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

export default function IssueDetailsPage({issue}:{issue:Issue}){
    return(
        <>
        <Heading>{issue.title}</Heading>
        <Flex className="space-x-3 items-center my-4">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.created_at.toDateString()}</Text>
        </Flex>

        <Card className="prose">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </>
    );}