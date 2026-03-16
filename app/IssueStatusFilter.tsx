"use client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

export default function IssueStatusFilter() {
  const router = useRouter();

  const statuses = [
    { label: "All", value: "all" },
    { label: "Open", value: "OPEN" },
    { label: "Closed", value: "CLOSED" },
    { label: "In progress", value: "IN_PROGRESS" },
  ];

  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || "all"}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);

        const query = params.toString();
        router.push("/issues/?" + query);
      }}
    >
      <Select.Trigger
        placeholder="Filter by Status..."
        style={{ width: 200 }}
      />
      <Select.Content>
        <Select.Group>
          {statuses?.map((status) => {
            return (
              <Select.Item value={status.value} key={status.value}>
                {status.label}
              </Select.Item>
            );
          })}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
