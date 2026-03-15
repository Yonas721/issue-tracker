"use client";

import { Card } from "@radix-ui/themes";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
interface Props {
  open: number;
  closed: number;
  inProgress: number;
}
export default function IssueBar({ open, closed, inProgress }: Props) {
  const container = [
    { label: "Open", value: open },
    { label: "Closed", value: closed },
    { label: "In Progress", value: inProgress },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={container}>
          <XAxis dataKey="label" />
          <YAxis width="auto" />
          <Bar dataKey="value" barSize={60} style={{fill:'var(--accent-9)'}}/>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
