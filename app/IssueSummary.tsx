import { Card, Flex, Heading, Text } from "@radix-ui/themes";
interface Props {
  open: number;
  closed: number;
  inProgress: number;
}
export default function IssueSummary({ open, closed, inProgress }: Props) {
  const container = [
    { label: "Open", value: open },
    { label: "Closed", value: closed },
    { label: "In Progress", value: inProgress },
  ];
  return (
    <Flex gap="4" mb="8">
      {container.map((status) => {
        return (
          <Card key={status.label}>
            <Flex direction="column" gap="4">
              <Heading>{status.label}</Heading>
              <Text>{status.value}</Text>
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
}
