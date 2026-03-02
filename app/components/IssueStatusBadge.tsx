import { Badge } from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  status: ReactNode;
}



export default function IssueStatusBadge({ status }: Props) {
  return <Badge color={status==="OPEN"? "red" : status==="IN_PROGRESS" ?"yellow" :"green"}>{status}</Badge>;
}
