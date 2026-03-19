import Link from "next/link";
import { Button, Flex } from "@radix-ui/themes";
import { Suspense } from "react";
import IssueStatusFilter from "@/app/IssueStatusFilter";
export default function ButtonIssue() {
  return (
    <Flex className="mb-5" justify="between">
      <Suspense>
        <IssueStatusFilter />
      </Suspense>
      <Button>
        <Link href="/issues/new">New issue</Link>
      </Button>
    </Flex>
  );
}
