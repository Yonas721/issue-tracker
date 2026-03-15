import prisma from "@/app/prisma";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "./components/IssueStatusBadge";

export default async function LatestIssue() {
  const issues = await prisma.issue.findMany({
    orderBy: { created_at: "desc" },
    take: 5,
    include:{assignedToUser:true}
  });
  return (
    <Card>
      <Heading size="4" mb="4">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((issue) => {
            return (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Flex justify="between">
                    <Flex gap="4" direction="column" align="start">
                      <Link href={`/issues/${issue.id}/`}>{issue.title}</Link>

                      <IssueStatusBadge status={issue.status} />
                    </Flex>

                    <Flex>
                      {issue.assignedToUser && (
                        <Avatar
                          src={issue.assignedToUser.image!}
                          fallback="?"
                          radius="full"
                          size="2"
                        />
                      )}
                    </Flex>
                  </Flex>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
