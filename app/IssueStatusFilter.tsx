"use client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function IssueStatusFilter() {
  const router = useRouter();

  const statuses = [
    { label: "All", value: "all" },
    { label: "Open", value: "OPEN" },
    { label: "Closed", value: "CLOSED" },
    { label: "In progress", value: "IN_PROGRESS" },
  ];

 

  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status !== "all" ? `?status=${status}` : "";
        router.push("/issues" + query);
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
