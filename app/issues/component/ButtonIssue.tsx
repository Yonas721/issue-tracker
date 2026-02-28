import Link from "next/link";
import { Button } from "@radix-ui/themes";
export default function ButtonIssue() {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/issues/new">New issue</Link>
      </Button>
    </div>
  );
}
